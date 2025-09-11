import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TimerState } from 'src/app/features/tournament/service/tournament';

export interface LevelData {
  level: number;
  smallBlind: number;
  bigBlind: number;
  ante: number;
  isCompleted: boolean;
  isActive: boolean;
}

@Component({
  selector: 'app-level-schedules',
  templateUrl: './level-schedules.component.html',
  styleUrls: ['./level-schedules.component.scss'],
  standalone: false,
})
export class LevelSchedulesComponent implements OnInit {
  @Input() timerState!: TimerState;
  @Input() initialSmallBlind: number = 50;
  @Input() anteEnabled: boolean = false;

  levels: LevelData[] = [];
  durationMinutes: number = 10;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.generateLevels();
    this.durationMinutes = this.timerState.durationMinutes;
  }

  private generateLevels() {
    this.levels = [];

    for (let level = 1; level <= this.timerState.totalLevels; level++) {
      const smallBlind = this.initialSmallBlind * level;
      const bigBlind = smallBlind * 2;
      const ante = this.anteEnabled ? Math.floor(smallBlind * 0.1) : 0;

      this.levels.push({
        level,
        smallBlind,
        bigBlind,
        ante,
        isCompleted: level < this.timerState.currentLevel,
        isActive: level === this.timerState.currentLevel,
      });
    }
  }

  formatBlind(amount: number): string {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toString();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
