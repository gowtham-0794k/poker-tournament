import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private startTime: number = 0;
  private pausedTime: number = 0;
  private totalPausedDuration: number = 0;
  private animationFrameId: number | null = null;

  // Toast notification tracking
  private toastShown80: boolean = false;
  private toastShown90: boolean = false;

  constructor(
    private ngZone: NgZone,
    private toastController: ToastController
  ) {}

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
    if (!hasPermission) return; // Do not schedule if permission denied
    const currentValues = this.getCurrentState();
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Tournament Timer',
          body: `Time left: ${this.getFormattedTime()} | Level: ${
            currentValues.currentLevel
          } | Blinds: ${currentValues.currentSmallBlind}/${
            currentValues.currentBigBlind
          } `,
          id: 1,
        },
      ],
    });
  }

  // Check and show progress toasts
  private checkProgressToasts(progressPercentage: number): void {
    if (progressPercentage >= 80 && !this.toastShown80) {
      this.toastShown80 = true;
      this.showToast('⚠️ Level 80% Complete !', 'warning');
      this.showTimerNotification();
    }

    if (progressPercentage >= 90 && !this.toastShown90) {
      this.toastShown90 = true;
      this.showToast('🚨 Level 90% Complete !', 'danger');
      this.showTimerNotification();
    }
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
      this.resetToastFlags(); // Reset when starting fresh
    }

    const newState: TimerState = {
      ...currentState,
      isRunning: true,
      isPaused: false,
    };

    this.timerStateSubject.next(newState);
    this.startTimerLoop();
  }

  anteToggle(event: boolean): void {
    const currentState = this.getCurrentState();
    const newState: TimerState = {
      ...currentState,
      anteEnabled: event,
    };
    this.timerStateSubject.next(newState);
  }

  // Pause timer
  pause(): void {
    const currentState = this.getCurrentState();

    if (!currentState.isRunning) {
      return; // Not running
    }

    this.pausedTime = Date.now();

    const newState: TimerState = {
      ...currentState,
      isRunning: false,
      isPaused: true,
    };

    this.timerStateSubject.next(newState);
    this.stopTimerLoop();
  }

  // Reset timer
  reset(): void {
    this.stopTimerLoop();
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

  // Get current state
  getCurrentState(): TimerState {
    return this.timerStateSubject.value;
  }

  // Code Generated by Sidekick is for learning and experimentation purposes only.
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

  // Private: Start timer loop using requestAnimationFrame for precision
  private startTimerLoop(): void {
    this.ngZone.runOutsideAngular(() => {
      const tick = () => {
        const now = Date.now();
        const elapsed = now - this.startTime - this.totalPausedDuration;
        const levelDurationMs = this.config.durationMinutes * 60 * 1000;
        const remaining = Math.max(0, levelDurationMs - elapsed);

        this.ngZone.run(() => {
          const currentState = this.getCurrentState();

          if (remaining <= 0) {
            this.nextLevel();
          } else {
            const updatedState: TimerState = {
              ...currentState,
              timeRemainingMs: remaining,
            };
            this.timerStateSubject.next(updatedState);

            // Check for toast notifications
            const progressPercentage = this.getProgressPercentage();
            this.checkProgressToasts(progressPercentage);
          }
        });

        if (this.getCurrentState().isRunning) {
          this.animationFrameId = requestAnimationFrame(tick);
        }
      };

      this.animationFrameId = requestAnimationFrame(tick);
    });
  }

  // Private: Stop timer loop
  private stopTimerLoop(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  // Private: Move to next level
  private nextLevel(): void {
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
    this.resetToastFlags(); // Reset for new level

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

  // Private: Handle tournament completion
  private tournamentComplete(): void {
    this.stopTimerLoop();

    const currentState = this.getCurrentState();
    const newState: TimerState = {
      ...currentState,
      isRunning: false,
      isPaused: false,
      timeRemainingMs: 0,
    };

    this.timerStateSubject.next(newState);

    // Show tournament completion toast
    this.showToast('🏆 Tournament Complete! Congratulations! 🏆', 'success');
  }

  // Get progress percentage (0-100)
  getProgressPercentage(): number {
    const currentState = this.getCurrentState();
    const totalMs = this.config.durationMinutes * 60 * 1000;
    const elapsed = totalMs - currentState.timeRemainingMs;
    return Math.min(100, Math.max(0, (elapsed / totalMs) * 100));
  }

  // Code Generated by Sidekick is for learning and experimentation purposes only.
  syncToLevel(level: number, timeRemainingMs: number): void {
    if (level < 1 || level > this.config.totalLevels) {
      return; // Invalid level
    }

    // Use incremental logic for blinds
    const smallBlind =
      this.config.initialSmallBlind +
      this.config.initialBlindsIncrement * (level - 1);
    const bigBlind = smallBlind * 2;

    // Calculate new timing references for accurate sync
    const currentState = this.getCurrentState();
    const levelDurationMs = this.config.durationMinutes * 60 * 1000;
    const elapsedMs = levelDurationMs - timeRemainingMs;

    // Update timing references to match the synced time
    this.startTime = Date.now() - elapsedMs;
    this.totalPausedDuration = 0;
    this.resetToastFlags(); // Reset for synced level

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

  async ensureNotificationPermission() {
    // Step 1: Check current permission status
    const permissionStatus = await LocalNotifications.checkPermissions();

    // Step 2: If not granted, request permission
    if (permissionStatus.display !== 'granted') {
      const requestStatus = await LocalNotifications.requestPermissions();
      if (requestStatus.display !== 'granted') {
        // Permission denied, handle accordingly (e.g., show message)
        console.warn('Notification permission not granted.');
        return false;
      }
    }
    // Permission granted, safe to schedule notifications
    return true;
  }

  // Cleanup
  destroy(): void {
    this.stopTimerLoop();
  }
}
