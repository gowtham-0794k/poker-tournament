import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false,
})
export class MenuComponent implements OnInit {
  darkMode = false;

  constructor() {}

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode');
    this.darkMode = savedMode === 'true';
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Optionally persist the setting
    localStorage.setItem('darkMode', this.darkMode.toString());
  }
}
