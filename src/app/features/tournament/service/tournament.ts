import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import {
  map,
  takeWhile,
  tap,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';

export interface TimerConfig {
  initialSmallBlind: number;
  initialBlindsIncrement: number;
  durationMinutes: number;
  totalLevels: number;
  anteEnabled: boolean;
}

export interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  currentLevel: number;
  currentSmallBlind: number;
  initialSmallBlind: number;
  currentBlindsIncrement: number;
  currentBigBlind: number;
  timeRemainingMs: number;
  totalLevels: number;
  durationMinutes: number;
  anteEnabled?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TournamentTimerService {
  private timerStateSubject = new BehaviorSubject<TimerState>({
    isRunning: false,
    isPaused: false,
    currentLevel: 1,
    initialSmallBlind: 50,
    currentSmallBlind: 50,
    currentBlindsIncrement: 50,
    currentBigBlind: 100,
    timeRemainingMs: 600000, // 10 minutes in milliseconds
    totalLevels: 10,
    durationMinutes: 10,
    anteEnabled: false,
  });

  public timerState$ = this.timerStateSubject.asObservable();

  private config: TimerConfig = {
    initialSmallBlind: 50,
    initialBlindsIncrement: 50,
    durationMinutes: 10,
    totalLevels: 10,
    anteEnabled: false,
  };

  // RxJS timer observables and subscriptions
  private timerSubscription: Subscription | null = null;
  private readonly TIMER_INTERVAL_MS = 100; // Update every 100ms for smooth display

  // Timing tracking
  private startTime: number = 0;
  private pausedTime: number = 0;
  private totalPausedDuration: number = 0;

  // Toast notification tracking
  private toastShown80: boolean = false;
  private toastShown90: boolean = false;

  constructor(
    private ngZone: NgZone,
    private toastController: ToastController
  ) {
    this.setupTimerObservables();
  }

  // Setup RxJS timer observables
  private setupTimerObservables(): void {
    // Create progress percentage observable
    const progressPercentage$ = this.timerState$.pipe(
      map((state) => this.calculateProgressPercentage(state)),
      distinctUntilChanged()
    );

    // Monitor progress for toast notifications
    progressPercentage$
      .pipe(filter((percentage) => percentage >= 80 && !this.toastShown80))
      .subscribe(() => {
        this.toastShown80 = true;
        this.showToast('⚠️ Level 80% Complete !', 'warning');
        this.showTimerNotification();
      });

    progressPercentage$
      .pipe(filter((percentage) => percentage >= 90 && !this.toastShown90))
      .subscribe(() => {
        this.toastShown90 = true;
        this.showToast('🚨 Level 90% Complete !', 'danger');
        this.showTimerNotification();
      });
  }

  // Calculate progress percentage
  private calculateProgressPercentage(state: TimerState): number {
    const totalMs = this.config.durationMinutes * 60 * 1000;
    const elapsed = totalMs - state.timeRemainingMs;
    return Math.min(100, Math.max(0, (elapsed / totalMs) * 100));
  }

  // Start the RxJS-based timer
  private startRxJSTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = interval(this.TIMER_INTERVAL_MS)
      .pipe(
        map(() => Date.now()),
        map((currentTime) => {
          const elapsed =
            currentTime - this.startTime - this.totalPausedDuration;
          const levelDurationMs = this.config.durationMinutes * 60 * 1000;
          return Math.max(0, levelDurationMs - elapsed);
        }),
        takeWhile(() => this.getCurrentState().isRunning),
        tap((timeRemainingMs) => {
          const currentState = this.getCurrentState();

          if (timeRemainingMs <= 0) {
            // Level complete - move to next level
            this.handleLevelComplete();
          } else {
            // Update timer state
            const updatedState: TimerState = {
              ...currentState,
              timeRemainingMs,
            };
            this.timerStateSubject.next(updatedState);
          }
        })
      )
      .subscribe();
  }

  // Handle level completion
  private handleLevelComplete(): void {
    const currentState = this.getCurrentState();

    if (currentState.currentLevel >= currentState.totalLevels) {
      // Tournament finished
      this.tournamentComplete();
      return;
    }

    const nextLevel = currentState.currentLevel + 1;
    const nextSmallBlind =
      currentState.currentSmallBlind + currentState.currentBlindsIncrement;
    const nextBigBlind = nextSmallBlind * 2;

    // Show level completion toast
    this.showToast(
      `🎉 Level ${currentState.currentLevel} Complete! Moving to Level ${nextLevel}`,
      'success'
    );

    this.showTimerNotification();

    // Reset timer for next level
    this.startTime = Date.now();
    this.totalPausedDuration = 0;
    this.resetToastFlags();

    const newState: TimerState = {
      ...currentState,
      currentLevel: nextLevel,
      currentSmallBlind: nextSmallBlind,
      currentBigBlind: nextBigBlind,
      timeRemainingMs: this.config.durationMinutes * 60 * 1000,
      anteEnabled: this.config.anteEnabled,
    };

    this.timerStateSubject.next(newState);
  }

  // Show toast notification
  private async showToast(
    message: string,
    color: string = 'warning'
  ): Promise<void> {
    try {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position: 'middle',
        color: color,
      });
      await toast.present();
    } catch (error) {
      console.error('Error showing toast:', error);
    }
  }

  async showTimerNotification() {
    const hasPermission = await this.ensureNotificationPermission();
    if (!hasPermission) return;

    const currentValues = this.getCurrentState();
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Tournament Timer',
          body: `Time left: ${this.getFormattedTime()} | Level: ${
            currentValues.currentLevel
          } | Blinds: ${currentValues.currentSmallBlind}/${
            currentValues.currentBigBlind
          }`,
          id: 1,
        },
      ],
    });
  }

  // Reset toast flags for new level
  private resetToastFlags(): void {
    this.toastShown80 = false;
    this.toastShown90 = false;
  }

  // Configure timer settings
  configure(config: TimerConfig): void {
    if (this.getCurrentState().isRunning) {
      return; // Cannot configure while running
    }

    this.config = { ...config };
    const newState: TimerState = {
      isRunning: false,
      isPaused: false,
      currentLevel: 1,
      currentSmallBlind: config.initialSmallBlind,
      initialSmallBlind: config.initialSmallBlind,
      currentBlindsIncrement: config.initialBlindsIncrement,
      currentBigBlind: config.initialSmallBlind * 2,
      timeRemainingMs: config.durationMinutes * 60 * 1000,
      totalLevels: config.totalLevels,
      durationMinutes: config.durationMinutes,
      anteEnabled: config.anteEnabled,
    };

    this.timerStateSubject.next(newState);
  }

  // Start timer
  start(): void {
    const currentState = this.getCurrentState();

    if (currentState.isRunning) {
      return; // Already running
    }

    if (currentState.isPaused) {
      // Resume from pause
      this.totalPausedDuration += Date.now() - this.pausedTime;
    } else {
      // Fresh start
      this.startTime = Date.now();
      this.totalPausedDuration = 0;
      this.resetToastFlags();
    }

    const newState: TimerState = {
      ...currentState,
      isRunning: true,
      isPaused: false,
    };

    this.timerStateSubject.next(newState);
    this.startRxJSTimer();
  }

  // Pause timer
  pause(): void {
    const currentState = this.getCurrentState();

    if (!currentState.isRunning) {
      return; // Not running
    }

    this.pausedTime = Date.now();

    // Stop the timer subscription
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }

    const newState: TimerState = {
      ...currentState,
      isRunning: false,
      isPaused: true,
    };

    this.timerStateSubject.next(newState);
  }

  // Reset timer
  reset(): void {
    // Stop any running timer
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }

    this.resetToastFlags();

    const newState: TimerState = {
      isRunning: false,
      isPaused: false,
      currentLevel: 1,
      currentSmallBlind: this.config.initialSmallBlind,
      initialSmallBlind: this.config.initialSmallBlind,
      currentBlindsIncrement: this.config.initialBlindsIncrement,
      currentBigBlind: this.config.initialSmallBlind * 2,
      timeRemainingMs: this.config.durationMinutes * 60 * 1000,
      totalLevels: this.config.totalLevels,
      durationMinutes: this.config.durationMinutes,
      anteEnabled: this.config.anteEnabled,
    };

    this.timerStateSubject.next(newState);
    this.startTime = 0;
    this.pausedTime = 0;
    this.totalPausedDuration = 0;
  }

  anteToggle(event: boolean): void {
    const currentState = this.getCurrentState();
    const newState: TimerState = {
      ...currentState,
      anteEnabled: event,
    };
    this.timerStateSubject.next(newState);
  }

  // Get current state
  getCurrentState(): TimerState {
    return this.timerStateSubject.value;
  }

  getFormattedTime(): string {
    const currentState = this.getCurrentState();
    const totalSeconds = Math.ceil(currentState.timeRemainingMs / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      `${hours.toString().padStart(2, '0')}:` +
      `${minutes.toString().padStart(2, '0')}:` +
      `${seconds.toString().padStart(2, '0')}`
    );
  }

  // Get progress percentage (0-100)
  getProgressPercentage(): number {
    return this.calculateProgressPercentage(this.getCurrentState());
  }

  // Sync to specific level and time
  syncToLevel(level: number, timeRemainingMs: number): void {
    if (level < 1 || level > this.config.totalLevels) {
      return; // Invalid level
    }

    // Calculate blinds for the specified level
    const smallBlind =
      this.config.initialSmallBlind +
      this.config.initialBlindsIncrement * (level - 1);
    const bigBlind = smallBlind * 2;

    // Calculate timing references for accurate sync
    const currentState = this.getCurrentState();
    const levelDurationMs = this.config.durationMinutes * 60 * 1000;
    const elapsedMs = levelDurationMs - timeRemainingMs;

    // Update timing references to match the synced time
    this.startTime = Date.now() - elapsedMs;
    this.totalPausedDuration = 0;
    this.resetToastFlags();

    // If timer was paused, keep it paused but update the pause reference
    if (currentState.isPaused) {
      this.pausedTime = Date.now();
    }

    const newState: TimerState = {
      ...currentState,
      currentLevel: level,
      currentSmallBlind: smallBlind,
      currentBigBlind: bigBlind,
      timeRemainingMs: timeRemainingMs,
      anteEnabled: this.config.anteEnabled,
    };

    this.timerStateSubject.next(newState);

    // Show sync confirmation toast
    this.showToast(
      `⚡ Synced to Level ${level} with ${this.getFormattedTime()} remaining`,
      'tertiary'
    );
  }

  // Handle tournament completion
  private tournamentComplete(): void {
    this.showToast('🏆 Tournament Complete! Congratulations! 🏆', 'success');
    this.reset();
  }

  async ensureNotificationPermission(): Promise<boolean> {
    const permissionStatus = await LocalNotifications.checkPermissions();

    if (permissionStatus.display !== 'granted') {
      const requestStatus = await LocalNotifications.requestPermissions();
      if (requestStatus.display !== 'granted') {
        console.warn('Notification permission not granted.');
        return false;
      }
    }
    return true;
  }

  // Cleanup method
  destroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}
