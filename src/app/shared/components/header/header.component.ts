import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  public title = 'Poker Tournament';
  public showSettings = true;
  public showSync = true;

  constructor() {}

  ngOnInit() {}

  openSettings() {}

  syncTournament() {}
}
