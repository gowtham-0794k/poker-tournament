import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, shareReplay } from 'rxjs';
import { timeComponents } from 'src/app/shared/model/count-down.model';
import { CountDown } from '../../service/count-down';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
  imports: [CommonModule],
})
export class CountDownTimerComponent implements OnInit {
  public timeLeft$: Observable<timeComponents>;

  constructor(public countDown: CountDown) {
    this.timeLeft$ = interval(1000).pipe(
      map((x) => countDown.calcDateDiff()),
      shareReplay(1)
    );
  }

  ngOnInit() {}
}
