import { Injectable } from '@angular/core';
import { timeComponents } from 'src/app/shared/model/count-down.model';

@Injectable({
  providedIn: 'root',
})
export class CountDown {
  constructor() {}

  calcDateDiff(endDay: Date = new Date(2025, 10, 12)): timeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
        (milliSecondsInASecond *
          minutesInAnHour *
          secondsInAMinute *
          hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }
}
