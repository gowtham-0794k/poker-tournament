import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { TournamentTimerService } from './features/tournament/service/tournament';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private tournamentTimerService: TournamentTimerService) {
    this.setInitialTheme();
  }

  async ngOnInit() {
    await this.tournamentTimerService.ensureNotificationPermission();
  }

  setInitialTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes in system theme
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.toggleDarkTheme(mediaQuery.matches);
    });
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
