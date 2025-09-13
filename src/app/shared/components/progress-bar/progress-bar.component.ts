import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: false,
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() current: number = 0; // Current counter value
  @Input() total: number = 100; // Maximum counter value
  @Input() size: number = 150; // Size of the circle (width/height in px)
  @Input() strokeWidth: number = 8; // Width of the progress stroke
  @Input() color: string = '#3880ff'; // Progress color
  @Input() backgroundColor: string = '#e0e0e0'; // Background circle color
  @Input() showPercentage: boolean = true; // Show percentage in center
  @Input() showCounter: boolean = true; // Show counter (current/total)
  @Input() label: string = ''; // Optional label below counter
  @Input() animated: boolean = true; // Enable animations
  @Input() animationDuration: number = 0.5; // Animation duration in seconds
  @Input() progressPercentage: number = 0; // Animation duration in seconds

  // Calculated values
  progress: number = 0;
  circumference: number = 0;
  strokeDasharray: string = '';
  strokeDashoffset: number = 0;
  radius: number = 0;
  Math = Math; // Make Math available in template

  ngOnInit() {
    this.calculateCircleProperties();
    this.updateProgress();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['current'] ||
      changes['total'] ||
      changes['size'] ||
      changes['strokeWidth']
    ) {
      this.calculateCircleProperties();
      this.updateProgress();
    }
  }

  private calculateCircleProperties() {
    // Calculate radius (size/2 minus stroke width to prevent cutoff)
    this.radius = this.size / 2 - this.strokeWidth / 2;

    // Calculate circumference
    this.circumference = 2 * Math.PI * this.radius;

    // Set up dash array
    this.strokeDasharray = `${this.circumference}`;
  }

  private updateProgress() {
    // Use direct percentage if provided, otherwise calculate from current/total
    if (this.progressPercentage !== undefined) {
      this.progress = Math.min(100, Math.max(0, this.progressPercentage));
    } else {
      this.progress = this.total > 0 ? (this.current / this.total) * 100 : 0;
      this.progress = Math.min(100, Math.max(0, this.progress));
    }

    // Calculate stroke dash offset for the circle
    const progressLength = (this.progress / 100) * this.circumference;
    this.strokeDashoffset = this.circumference - progressLength;
  }

  // Get dynamic color based on progress
  getProgressColor(): string {
    if (this.progress >= 100) return '#28a745'; // Success green
    if (this.progress >= 75) return this.color;
    if (this.progress >= 50) return '#ffc107'; // Warning yellow
    if (this.progress >= 25) return '#fd7e14'; // Orange
    return '#dc3545'; // Danger red
  }

  // Format counter display
  getCounterText(): string {
    if (this.showCounter) {
      return `${this.current}/${this.total}`;
    }
    return '';
  }

  // Get percentage text
  getPercentageText(): string {
    return `${Math.round(this.progress)}%`;
  }
}
