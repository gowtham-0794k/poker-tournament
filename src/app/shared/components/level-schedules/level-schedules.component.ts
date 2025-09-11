import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  TournamentTimerService,
  TimerState,
} from 'src/app/features/tournament/service/tournament';

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
  levels: LevelData[] = [];
  durationMinutes = 10;
  anteEnabled = false;

  constructor(
    private modalController: ModalController,
    private tournamentTimerService: TournamentTimerService
  ) {}

  ngOnInit() {
    this.tournamentTimerService.timerState$.subscribe((state) => {
      this.durationMinutes = state.durationMinutes;
      this.anteEnabled = !!state.anteEnabled;
      this.generateLevels(state);
    });
  }

  private generateLevels(state: TimerState) {
    this.levels = [];

    for (let level = 1; level <= state.totalLevels; level++) {
      // Always use initialSmallBlind for calculation
      let smallBlind =
        state.initialSmallBlind + state.currentBlindsIncrement * (level - 1);
      const bigBlind = smallBlind * 2;
      const ante = state.anteEnabled ? bigBlind : 0;

      this.levels.push({
        level,
        smallBlind,
        bigBlind,
        ante,
        isCompleted: level < state.currentLevel,
        isActive: level === state.currentLevel,
      });
    }
  }

  formatBlind(amount: number): string {
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
    return amount.toString();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
