import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared-module';

@Component({
  selector: 'app-tournament-timer',
  templateUrl: './tournament-timer.component.html',
  styleUrls: ['./tournament-timer.component.scss'],
  imports: [IonicModule, SharedModule],
})
export class TournamentTimerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
