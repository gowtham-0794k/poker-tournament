import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, SharedModule],
})
export class HomeComponent implements OnInit, OnDestroy {
  inputHours: number = 0;
  inputMinutes: number = 0;
  remainingTime: number = 0;
  isRunning: boolean = false;
  hasStarted: boolean = false;
  isPaused: boolean = false;
  totalSeconds: number = 0;
  private intervalId: any;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Start the countdown timer
   */
  startCountdown(): void {
    if (this.inputHours <= 0 && this.inputMinutes <= 0) {
      alert('Please enter a valid duration');
      return;
    }

    if (!this.hasStarted) {
      this.totalSeconds = this.inputHours * 3600 + this.inputMinutes * 60;
      this.remainingTime = this.totalSeconds;
      this.hasStarted = true;
    }

    this.isRunning = true;
    this.isPaused = false;

    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  /**
   * Stop the countdown timer
   */
  stopCountdown(): void {
    this.isRunning = false;
    this.isPaused = true;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Toggle pause/resume
   */
  togglePauseResume(): void {
    if (this.isRunning) {
      this.stopCountdown();
    } else if (this.isPaused && this.hasStarted) {
      this.startCountdown();
    }
  }

  /**
   * Reset the countdown timer
   */
  resetCountdown(): void {
    this.stopCountdown();
    this.remainingTime = 0;
    this.hasStarted = false;
    this.isPaused = false;
    this.inputHours = 0;
    this.inputMinutes = 0;
  }

  /**
   * Get button label for pause/resume
   */
  getPauseButtonLabel(): string {
    return this.isPaused ? 'Resume' : 'Pause';
  }

  /**
   * Format time from seconds to MM:SS format
   */
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${this.padZero(minutes)}:${this.padZero(secs)}`;
  }

  /**
   * Get hours from remaining time
   */
  getHours(): string {
    const hours = Math.floor(this.remainingTime / 3600);
    return this.padZero(hours);
  }

  /**
   * Get minutes from remaining time
   */
  getMinutes(): string {
    const minutes = Math.floor((this.remainingTime % 3600) / 60);
    return this.padZero(minutes);
  }

  /**
   * Get seconds from remaining time
   */
  getSeconds(): string {
    const seconds = this.remainingTime % 60;
    return this.padZero(seconds);
  }

  /**
   * Pad single digit numbers with zero
   */
  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  /**
   * Get progress percentage for progress bar
   */
  getProgressPercentage(): number {
    if (this.totalSeconds === 0) return 0;
    return ((this.totalSeconds - this.remainingTime) / this.totalSeconds) * 100;
  }

  /**
   * Clear input if value is 0 when focused
   */
  clearInputIfZero(field: 'hours' | 'minutes'): void {
    if (field === 'hours' && this.inputHours === 0) {
      this.inputHours = null as any;
    } else if (field === 'minutes' && this.inputMinutes === 0) {
      this.inputMinutes = null as any;
    }
  }

  /**
   * Reset input to 0 if empty when blurred
   */
  resetToZeroIfEmpty(field: 'hours' | 'minutes'): void {
    if (
      field === 'hours' &&
      (this.inputHours === null ||
        this.inputHours === undefined ||
        isNaN(this.inputHours))
    ) {
      this.inputHours = 0;
    } else if (
      field === 'minutes' &&
      (this.inputMinutes === null ||
        this.inputMinutes === undefined ||
        isNaN(this.inputMinutes))
    ) {
      this.inputMinutes = 0;
    }
  }
}
