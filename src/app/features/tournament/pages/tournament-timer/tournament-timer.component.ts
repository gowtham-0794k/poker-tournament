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
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
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
    this.runTimer();
    this.startLevelTimer(this.levelDuration);
  }

  runTimer() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    const tick = () => {
      if (!this.isPaused) {
        const now = performance.now();
        const elapsed = Math.floor(
          (now - this.startTimestamp - this.pauseAccumulated) / 1000
        );
        this.timeLeft = Math.max(this.levelDuration * 60 - elapsed, 0);
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
      this.currentSmallBlind += this.blindIncrease;
      this.currentBigBlind = this.currentSmallBlind * 2;
      this.timeLeft = this.levelDuration * 60;
      this.elapsedTime = 0; // Reset elapsedTime for the new level
      this.startTimestamp = performance.now();
      this.runTimer();
      this.startLevelTimer(this.levelDuration, 0); // Always start from 0
    } else {
      if (this.animationFrameId !== null) {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.gameStarted = false;
      this.showToast('Tournament complete!', 5000);
    }
  }

  togglePause() {
    if (!this.isPaused) {
      this.isPaused = true;
      this.pauseStarted = performance.now();
      if (this.animationFrameId !== null) {
        cancelAnimationFrame(this.animationFrameId);
      }
    } else {
      this.isPaused = false;
      this.pauseAccumulated += performance.now() - this.pauseStarted;
      this.runTimer();
      this.resumeLevelTimer(this.levelDuration);
    }
  }

  restartGame() {
    clearInterval(this.timer);
    clearInterval(this.levelTimer);
    this.isPaused = false;
    this.currentLevel = 0;
    this.currentSmallBlind = this.startingBlind;
    this.currentBigBlind = this.startingBlind * 2;
    this.timeLeft = this.levelDuration * 60;
    this.gameStarted = false;
    this.blindSchedule = [];
    this.elapsedTime = 0;
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

  startLevelTimer(levelDuration: number, startElapsed: number = 0) {
    clearInterval(this.levelTimer);
    this.elapsedTime = startElapsed;
    this.toastShown = false;
    this.levelTimer = setInterval(() => {
      if (!this.isPaused) {
        if (!this.toastShown && this.elapsedTime === levelDuration * 60 - 5) {
          this.showToast('Only 5 seconds left in this level!', 5000, 'warning');
          this.toastShown = true;
        }
        if (this.elapsedTime < levelDuration * 60) {
          this.elapsedTime++;
        } else {
          clearInterval(this.levelTimer);
          this.advanceToNextLevel();
        }
      }
    }, 1000);
  }

  resumeLevelTimer(levelDuration: number) {
    this.startLevelTimer(levelDuration, this.elapsedTime);
  }

  advanceToNextLevel() {
    if (this.currentLevel < this.blindSchedule.length) {
      this.showToast(
        `Level ${this.currentLevel + 1} started!`,
        5000,
        'primary'
      );
      this.startLevelTimer(this.levelDuration);
    } else {
      this.showToast('All levels complete!', 5000);
      this.elapsedTime = 0;
    }
  }

  getProgressPercent(levelDuration: number): number {
    return (this.elapsedTime / (levelDuration * 60)) * 100;
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
      cssClass: 'blind-settings-modal', // Optional: for custom styling
      backdropDismiss: true,
    });
    await modal.present();
  }

  syncTime() {
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
      seconds = +parts[0] * 60 + +parts[1];
    } else if (parts.length === 1) {
      seconds = +parts[0];
    }
    if (seconds >= 0 && seconds <= this.levelDuration * 60) {
      this.timeLeft = seconds;
      this.elapsedTime = this.levelDuration * 60 - seconds;
    }
  }
}
