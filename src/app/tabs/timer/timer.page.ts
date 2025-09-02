import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  ToastController,
  MenuController,
} from '@ionic/angular';
import { BlindStructureComponent } from './blind-structure-component/blind-structure-component.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
  standalone: false,
})
export class TimerPage implements OnInit {
  startingBlind: number = 100;
  blindIncrease: number = 100;
  levelDuration: number = 15;
  blindSchedule: { blind: number; time: number }[] = [];

  // Timer and blinds
  gameStarted: boolean = false;
  currentLevel: number = 0;
  currentSmallBlind: number = 0;
  currentBigBlind: number = 0;
  timeLeft: number = 0; // seconds
  timer: any;
  isPaused: boolean = false;
  levelTimer: any; // Reference to the interval timer
  elapsedTime = 0; // Seconds passed in current level
  public Math = Math;
  toastShown = false; // Add this flag

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private menuController: MenuController
  ) {}

  ngOnInit() {}

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
    let currentBlind = this.startingBlind;
    let currentTime = 0;
    let levels = 10; // Or make this configurable

    for (let i = 0; i < levels; i++) {
      currentTime = this.levelDuration;
      this.blindSchedule.push({ blind: currentBlind, time: currentTime });
      currentBlind += this.blindIncrease;
    }
    this.gameStarted = true;
    this.currentLevel = 0;
    this.currentSmallBlind = this.startingBlind;
    this.currentBigBlind = this.startingBlind * 2;
    this.timeLeft = this.levelDuration * 60; // convert minutes to seconds
    this.runTimer();
    this.startLevelTimer(this.blindSchedule[this.currentLevel].time); // Only here!
  }

  runTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.isPaused) {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.nextLevel();
        }
      }
    }, 1000);
  }

  nextLevel() {
    this.currentLevel++;
    if (this.currentLevel < this.blindSchedule.length) {
      this.currentSmallBlind += this.blindIncrease;
      this.currentBigBlind = this.currentSmallBlind * 2;
      this.timeLeft = this.levelDuration * 60;
    } else {
      clearInterval(this.timer);
      this.gameStarted = false;
      // Optionally show a message: Tournament complete!
    }
    this.advanceToNextLevel();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  togglePause() {
    if (this.isPaused) {
      this.isPaused = false;
      // Only resume timers, do NOT reset elapsedTime
      this.runTimer();
      this.resumeLevelTimer(this.blindSchedule[this.currentLevel].time);
    } else {
      this.isPaused = true;
      clearInterval(this.timer);
      clearInterval(this.levelTimer);
    }
  }

  restartGame() {
    clearInterval(this.timer);
    this.isPaused = false;
    this.currentLevel = 0;
    this.currentSmallBlind = this.startingBlind;
    this.currentBigBlind = this.startingBlind * 2;
    this.timeLeft = this.levelDuration * 60;
    this.gameStarted = false;
    this.blindSchedule = [];
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

  startLevelTimer(levelDuration: number) {
    if (this.levelTimer) {
      clearInterval(this.levelTimer);
    }
    this.elapsedTime = 0;
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
    if (this.levelTimer) {
      clearInterval(this.levelTimer);
    }
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

  advanceToNextLevel() {
    if (this.currentLevel < this.blindSchedule.length - 1) {
      this.showToast(
        `Level ${this.currentLevel + 1} started!`,
        5000,
        'primary'
      );
      this.startLevelTimer(this.blindSchedule[this.currentLevel].time); // Only here!
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

  openSettingsMenu() {
    this.menuController.open('settingsMenu');
  }
}
