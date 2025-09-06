import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blind-settings-modal',
  templateUrl: './blind-settings-modal.component.html',
  styleUrls: ['./blind-settings-modal.component.scss'],
  imports: [IonicModule],
})
export class BlindSettingsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
