import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { SettingsData } from '../../model/tournament.model';
import { TournamentTimerService } from 'src/app/features/tournament/service/tournament';

@Component({
  selector: 'app-blind-settings-modal',
  templateUrl: './blind-settings-modal.component.html',
  styleUrls: ['./blind-settings-modal.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class BlindSettingsModalComponent implements OnInit {
  smallBlind: number = 50;
  blindsIncrement: number = 50;
  duration: number = 10;
  levels: number = 10;

  @Input() canModifySettings: boolean = false;
  @Input() inputsValues: SettingsData = {
    smallBlind: 50,
    blindsIncrement: 50,
    duration: 10,
    levels: 10,
  };

  constructor(
    private tournamentTimerService: TournamentTimerService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadInputValues();
  }

  // Method to close the modal
  async dismissModal() {
    const settingsProps: SettingsData = {
      smallBlind: this.smallBlind,
      blindsIncrement: this.blindsIncrement,
      duration: this.duration,
      levels: this.levels,
    };
    await this.modalController.dismiss(settingsProps);
  }

  private loadInputValues() {
    this.smallBlind = this.inputsValues.smallBlind;
    this.blindsIncrement = this.inputsValues.blindsIncrement;
    this.duration = this.inputsValues.duration;
    this.levels = this.inputsValues.levels;
  }

  resetModal() {
    this.loadInputValues();
    this.tournamentTimerService.reset();
  }
}
