import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blind-settings-modal',
  templateUrl: './blind-settings-modal.component.html',
  styleUrls: ['./blind-settings-modal.component.scss'],
  standalone: false,
})
export class BlindSettingsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
