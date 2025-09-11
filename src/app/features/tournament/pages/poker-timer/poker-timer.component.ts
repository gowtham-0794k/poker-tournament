import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared-module';
import {
  TimerConfig,
  TimerState,
  TournamentTimerService,
} from '../../service/tournament';
import { LevelSchedulesComponent } from 'src/app/shared/components/level-schedules/level-schedules.component';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-poker-timer',
  templateUrl: './poker-timer.component.html',
  styleUrls: ['./poker-timer.component.scss'],
  imports: [IonicModule, SharedModule, FormsModule],
})
export class PokerTimerComponent implements OnInit, OnDestroy {
  // Form inputs
  smallBlind: number = 50;
  blindsIncrement: number = 50;
  duration: number = 10;
  levels: number = 10;

  // Sync inputs
  syncLevel: number = 1;
  syncTime: string = '';
  anteEnabled: boolean = false;
  stackSize: number | null = null;
  bigBlindsLeft = 0;

  // Timer state from service
  timerState: TimerState = {
    isRunning: false,
    isPaused: false,
    currentLevel: 1,
    currentSmallBlind: 50,
    initialSmallBlind: 50,
    currentBlindsIncrement: 50,
    currentBigBlind: 100,
    timeRemainingMs: 600000,
    totalLevels: 10,
    durationMinutes: 10,
  };

  private timerSubscription?: Subscription;

  constructor(
    private tournamentTimerService: TournamentTimerService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // Subscribe to timer state changes
    this.timerSubscription = this.tournamentTimerService.timerState$.subscribe(
      (state) => {
        this.timerState = state;
        // Update form inputs to reflect current config
        if (!state.isRunning && !state.isPaused) {
          this.smallBlind = state.currentSmallBlind;
          this.duration = state.durationMinutes;
          this.levels = state.totalLevels;
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.tournamentTimerService.destroy();
  }

  // Start or resume timer
  startTimer() {
    if (!this.timerState.isRunning && !this.timerState.isPaused) {
      // Configure with current form values before starting
      const config: TimerConfig = {
        initialSmallBlind: this.smallBlind,
        initialBlindsIncrement: this.blindsIncrement,
        durationMinutes: this.duration,
        totalLevels: this.levels,
        anteEnabled: this.anteEnabled,
      };
      this.tournamentTimerService.configure(config);
    }

    this.tournamentTimerService.start();
  }

  // Pause timer
  pauseTimer() {
    this.tournamentTimerService.pause();
  }

  // Reset timer
  resetTimer() {
    this.tournamentTimerService.reset();
  }

  // Sync timer to manual values
  syncTimer() {
    if (!this.isValidSync()) {
      return;
    }

    const timeMs = this.parseTimeToMs(this.syncTime);
    this.tournamentTimerService.syncToLevel(this.syncLevel, timeMs);
  }

  // Get formatted time for display
  getFormattedTime(): string {
    return this.tournamentTimerService.getFormattedTime();
  }

  // Get progress percentage for progress bar
  getProgressPercentage(): number {
    return this.tournamentTimerService.getProgressPercentage();
  }

  // Check if inputs are valid
  isValidInput(): boolean {
    return this.smallBlind > 0 && this.duration > 0 && this.levels > 0;
  }

  // Check if sync inputs are valid
  isValidSync(): boolean {
    return (
      this.syncLevel !== null &&
      this.syncLevel > 0 &&
      this.syncLevel <= this.timerState.totalLevels &&
      this.syncTime.length > 0 &&
      this.isValidTimeFormat(this.syncTime)
    );
  }

  // Check if we can modify settings
  canModifySettings(): boolean {
    return !this.timerState.isRunning;
  }

  // Validate time format (mm:ss)
  private isValidTimeFormat(time: string): boolean {
    const timeRegex = /^([0-5]?[0-9]):([0-5][0-9])$/;
    return timeRegex.test(time);
  }

  // Parse time string to milliseconds
  private parseTimeToMs(time: string): number {
    const [minutes, seconds] = time.split(':').map(Number);
    return (minutes * 60 + seconds) * 1000;
  }

  // Generate array of all tournament levels
  getLevelsArray() {
    const levels = [];
    for (let i = 1; i <= this.timerState.totalLevels; i++) {
      const smallBlind = this.smallBlind * i;
      const bigBlind = smallBlind * 2;
      levels.push({
        level: i,
        smallBlind: smallBlind,
        bigBlind: bigBlind,
        duration: this.timerState.durationMinutes,
      });
    }
    return levels;
  }

  async openLevelSchedulesModal() {
    const modal = await this.modalController.create({
      component: LevelSchedulesComponent,
      cssClass: 'level-schedules-modal',
      backdropDismiss: true,
    });
    await modal.present();
  }

  toggleAnte() {
    this.tournamentTimerService.anteToggle(this.anteEnabled);
  }

  calculateBigBlindsLeft() {
    if (!this.stackSize || !this.timerState.currentBigBlind) {
      return;
    }
    if (this.anteEnabled) {
      // With ante: Stack / (big blind * 2)
      this.bigBlindsLeft = Math.floor(
        this.stackSize / (this.timerState.currentBigBlind * 2)
      );
    } else {
      // Without ante: Stack / big blind
      this.bigBlindsLeft = Math.floor(
        this.stackSize / this.timerState.currentBigBlind
      );
    }
  }

  // Helper for template
  Math = Math;
}
