import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  MenuController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { BlindStructureComponent } from 'src/app/shared/components/blind-structure-component/blind-structure-component.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { BlindSettingsModalComponent } from 'src/app/shared/components/blind-settings-modal/blind-settings-modal.component';

@Component({
  selector: 'app-tournament-timer',
  templateUrl: './tournament-timer.component.html',
  styleUrls: ['./tournament-timer.component.scss'],
  imports: [IonicModule, SharedModule, FormsModule],
})
export class TournamentTimerComponent implements OnInit, OnDestroy {
  startingBlind = 100;
  blindIncrease = 100;
  blindSchedule: { blind: number; time: number }[] = [];

  gameStarted = false;
  currentLevel = 0;
  currentSmallBlind = 0;
  currentBigBlind = 0;
  elapsedTime = 0;
  toastShown = false;

  private timer: any;
  private levelTimer: any;
  readonly Math = Math;
  manualTime: string = '';
  manualLevel: number | null = null;
  private startTimestamp: number = 0;
  private pauseAccumulated: number = 0;
  private pauseStarted: number = 0;
  private animationFrameId: number | null = null;
  public timeLeft: number = 0;
  public isPaused: boolean = false;
  public levelDuration: number = 15; // in minutes

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    // Clean up all timers and animation frames
    this.cleanupTimers();
  }

  private cleanupTimers() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.levelTimer) {
      clearInterval(this.levelTimer);
      this.levelTimer = null;
    }
  }

  async generateBlinds() {
    const modal = await this.modalController.create({
      component: BlindStructureComponent,
      componentProps: {
        blindSchedule: this.blindSchedule,
        currentLevel: this.currentLevel,
      },
    });
    await modal.present();
  }

  startGame() {
    // Clean up any existing timers first
    this.cleanupTimers();

    this.blindSchedule = [];
    let blind = this.startingBlind;
    for (let i = 0; i < 10; i++) {
      this.blindSchedule.push({ blind, time: this.levelDuration });
      blind += this.blindIncrease;
    }
    this.gameStarted = true;
    this.currentLevel = 0;
    this.currentSmallBlind = this.startingBlind;
    this.currentBigBlind = this.startingBlind * 2;
    this.startTimestamp = performance.now();
    this.pauseAccumulated = 0;
    this.timeLeft = this.levelDuration * 60;
    this.isPaused = false;
    this.elapsedTime = 0;
    this.toastShown = false;
    this.runTimer();
  }

  runTimer() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    const tick = () => {
      if (!this.isPaused && this.gameStarted) {
        const now = performance.now();
        const totalElapsed = Math.floor(
          (now - this.startTimestamp - this.pauseAccumulated) / 1000
        );

        // Calculate current level elapsed time
        const currentLevelElapsed = totalElapsed % (this.levelDuration * 60);
        this.elapsedTime = currentLevelElapsed;
        this.timeLeft = Math.max(
          this.levelDuration * 60 - currentLevelElapsed,
          0
        );

        // Show warning toast 5 seconds before level ends
        if (!this.toastShown && this.timeLeft <= 5 && this.timeLeft > 0) {
          this.showToast('Only 5 seconds left in this level!', 3000, 'warning');
          this.toastShown = true;
        }

        if (this.timeLeft === 0) {
          this.nextLevel();
          return;
        }
      }
      this.animationFrameId = requestAnimationFrame(tick);
    };
    tick();
  }

  nextLevel() {
    this.currentLevel++;
    if (this.currentLevel < this.blindSchedule.length) {
      const levelData = this.blindSchedule[this.currentLevel];
      this.currentSmallBlind = levelData.blind;
      this.currentBigBlind = levelData.blind * 2;

      // Reset for new level
      this.timeLeft = this.levelDuration * 60;
      this.elapsedTime = 0;
      this.toastShown = false;
      this.startTimestamp = performance.now();
      this.pauseAccumulated = 0;

      this.showToast(
        `Level ${this.currentLevel + 1} started! Blinds: ${
          this.currentSmallBlind
        }/${this.currentBigBlind}`,
        3000,
        'success'
      );

      this.runTimer();
    } else {
      // Tournament complete
      this.cleanupTimers();
      this.gameStarted = false;
      this.showToast('Tournament complete!', 5000, 'success');
    }
  }

  togglePause() {
    if (!this.gameStarted) return;

    if (!this.isPaused) {
      this.isPaused = true;
      this.pauseStarted = performance.now();
      if (this.animationFrameId !== null) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    } else {
      this.isPaused = false;
      this.pauseAccumulated += performance.now() - this.pauseStarted;
      this.runTimer();
    }
  }

  restartGame() {
    this.cleanupTimers();
    this.isPaused = false;
    this.currentLevel = 0;
    this.currentSmallBlind = this.startingBlind;
    this.currentBigBlind = this.startingBlind * 2;
    this.timeLeft = this.levelDuration * 60;
    this.gameStarted = false;
    this.blindSchedule = [];
    this.elapsedTime = 0;
    this.toastShown = false;
    this.startTimestamp = 0;
    this.pauseAccumulated = 0;
    this.pauseStarted = 0;
  }

  get displayMinutes(): number {
    return Math.floor(this.timeLeft / 60);
  }

  get displaySeconds(): string {
    const seconds = this.timeLeft % 60;
    return seconds < 10 ? '0' + seconds : seconds.toString();
  }

  get currentLevelData() {
    return this.blindSchedule[this.currentLevel];
  }

  // Remove redundant timer methods - using only runTimer() now
  startLevelTimer(levelDuration: number, startElapsed: number = 0) {
    // This method is no longer needed as we use runTimer()
    // Kept for compatibility but doesn't do anything
  }

  resumeLevelTimer(levelDuration: number) {
    // This method is no longer needed as we use runTimer()
    // Kept for compatibility but doesn't do anything
  }

  advanceToNextLevel() {
    // This method is redundant with nextLevel()
    this.nextLevel();
  }

  getProgressPercent(): number {
    if (this.levelDuration === 0) return 0;
    return (this.elapsedTime / (this.levelDuration * 60)) * 100;
  }

  async showToast(
    message: string,
    duration: number,
    color: string = 'primary'
  ) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position: 'bottom',
    });
    await toast.present();
  }

  async openBlindSettings() {
    const modal = await this.modalController.create({
      component: BlindSettingsModalComponent,
      cssClass: 'blind-settings-modal',
      backdropDismiss: true,
    });
    await modal.present();
  }

  syncTime() {
    if (!this.gameStarted) return;

    // Sync Level
    if (
      this.manualLevel &&
      this.manualLevel >= 1 &&
      this.manualLevel <= this.blindSchedule.length
    ) {
      this.currentLevel = this.manualLevel - 1;
      const levelData = this.blindSchedule[this.currentLevel];
      this.currentSmallBlind = levelData.blind;
      this.currentBigBlind = levelData.blind * 2;
    }

    // Sync Time
    if (!this.manualTime) return;

    const parts = this.manualTime.split(':');
    let seconds = 0;

    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10);
      const secs = parseInt(parts[1], 10);
      if (!isNaN(minutes) && !isNaN(secs)) {
        seconds = minutes * 60 + secs;
      }
    } else if (parts.length === 1) {
      const parsed = parseInt(parts[0], 10);
      if (!isNaN(parsed)) {
        seconds = parsed;
      }
    }

    if (seconds >= 0 && seconds <= this.levelDuration * 60) {
      this.timeLeft = seconds;
      this.elapsedTime = this.levelDuration * 60 - seconds;
      this.toastShown = false;

      // Restart timer with new time
      this.startTimestamp = performance.now() - this.elapsedTime * 1000;
      this.pauseAccumulated = 0;
    }
  }
}
