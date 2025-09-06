import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blind-structure-component',
  templateUrl: './blind-structure-component.component.html',
  styleUrls: ['./blind-structure-component.component.scss'],
  standalone: false,
})
export class BlindStructureComponent implements OnInit, AfterViewInit {
  @Input() blindSchedule!: any[];
  @Input() currentLevel!: number;
  @ViewChild(IonContent) content!: IonContent;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.currentLevel);
  }

  close() {
    this.modalController.dismiss();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const el = document.getElementById('level-' + this.currentLevel);
      if (el && this.content) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200); // slight delay to ensure rendering
  }
}
