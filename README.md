# poker-tournament

https://www.google.com/search?q=create+apk+from+ionic+angular+app+in+windows&rlz=1C1GCEB_enIN1151IN1152&oq=create+apk+from+ionic+angular+app+in+windows&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBwgFEAAY7wUyBwgGEAAY7wUyBwgHEAAY7wUyCggIEAAYgAQYogTSAQkxMTY0MmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8&safe=active&ssui=on

npx cap add android
ionic build --prod
npx cap sync android
npx cap open android

Generate the APK in Android Studio:
In Android Studio, navigate to Build > Build Bundle(s) / APK(s) > Build APK(s).
Android Studio will compile and build your application.
Once the build is complete, a notification will appear with a link to locate the generated APK file. You will typically find it in your-project/android/app/build/outputs/apk/debug/app-debug.apk (for debug builds) or your-project/android/app/build/outputs/apk/release/app-release.apk (for release builds).

# poker-tournament

# Poker Tournament Tracker - Ionic Angular App

## Project Structure

```
poker-tournament-tracker/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── index.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── http-error.interceptor.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── storage.service.ts
│   │   │   │   ├── platform.service.ts
│   │   │   │   └── index.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   ├── header.component.scss
│   │   │   │   │   └── header.component.spec.ts
│   │   │   │   ├── countdown-timer/
│   │   │   │   │   ├── countdown-timer.component.ts
│   │   │   │   │   ├── countdown-timer.component.html
│   │   │   │   │   ├── countdown-timer.component.scss
│   │   │   │   │   └── countdown-timer.component.spec.ts
│   │   │   │   ├── level-display/
│   │   │   │   │   ├── level-display.component.ts
│   │   │   │   │   ├── level-display.component.html
│   │   │   │   │   ├── level-display.component.scss
│   │   │   │   │   └── level-display.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   ├── pipes/
│   │   │   │   ├── time-format.pipe.ts
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── index.ts
│   │   │   ├── directives/
│   │   │   │   └── index.ts
│   │   │   ├── models/
│   │   │   │   ├── tournament.model.ts
│   │   │   │   ├── level.model.ts
│   │   │   │   ├── blind-structure.model.ts
│   │   │   │   └── index.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── tournament/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── tournament-list/
│   │   │   │   │   │   ├── tournament-list.page.ts
│   │   │   │   │   │   ├── tournament-list.page.html
│   │   │   │   │   │   ├── tournament-list.page.scss
│   │   │   │   │   │   └── tournament-list.page.spec.ts
│   │   │   │   │   ├── tournament-detail/
│   │   │   │   │   │   ├── tournament-detail.page.ts
│   │   │   │   │   │   ├── tournament-detail.page.html
│   │   │   │   │   │   ├── tournament-detail.page.scss
│   │   │   │   │   │   └── tournament-detail.page.spec.ts
│   │   │   │   │   ├── tournament-create/
│   │   │   │   │   │   ├── tournament-create.page.ts
│   │   │   │   │   │   ├── tournament-create.page.html
│   │   │   │   │   │   ├── tournament-create.page.scss
│   │   │   │   │   │   └── tournament-create.page.spec.ts
│   │   │   │   │   └── tournament-timer/
│   │   │   │   │       ├── tournament-timer.page.ts
│   │   │   │   │       ├── tournament-timer.page.html
│   │   │   │   │       ├── tournament-timer.page.scss
│   │   │   │   │       └── tournament-timer.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── tournament.service.ts
│   │   │   │   │   ├── timer.service.ts
│   │   │   │   │   ├── blind-structure.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── blind-level-card/
│   │   │   │   │   │   ├── blind-level-card.component.ts
│   │   │   │   │   │   ├── blind-level-card.component.html
│   │   │   │   │   │   ├── blind-level-card.component.scss
│   │   │   │   │   │   └── blind-level-card.component.spec.ts
│   │   │   │   │   ├── tournament-controls/
│   │   │   │   │   │   ├── tournament-controls.component.ts
│   │   │   │   │   │   ├── tournament-controls.component.html
│   │   │   │   │   │   ├── tournament-controls.component.scss
│   │   │   │   │   │   └── tournament-controls.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── tournament-routing.module.ts
│   │   │   │   └── tournament.module.ts
│   │   │   ├── settings/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── settings.page.ts
│   │   │   │   │   │   ├── settings.page.html
│   │   │   │   │   │   ├── settings.page.scss
│   │   │   │   │   │   └── settings.page.spec.ts
│   │   │   │   │   ├── blind-structure-editor/
│   │   │   │   │   │   ├── blind-structure-editor.page.ts
│   │   │   │   │   │   ├── blind-structure-editor.page.html
│   │   │   │   │   │   ├── blind-structure-editor.page.scss
│   │   │   │   │   │   └── blind-structure-editor.page.spec.ts
│   │   │   │   │   └── preferences/
│   │   │   │   │       ├── preferences.page.ts
│   │   │   │   │       ├── preferences.page.html
│   │   │   │   │       ├── preferences.page.scss
│   │   │   │   │       └── preferences.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── settings.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── settings-item/
│   │   │   │   │   │   ├── settings-item.component.ts
│   │   │   │   │   │   ├── settings-item.component.html
│   │   │   │   │   │   ├── settings-item.component.scss
│   │   │   │   │   │   └── settings-item.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── settings-routing.module.ts
│   │   │   │   └── settings.module.ts
│   │   │   ├── statistics/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── statistics/
│   │   │   │   │   │   ├── statistics.page.ts
│   │   │   │   │   │   ├── statistics.page.html
│   │   │   │   │   │   ├── statistics.page.scss
│   │   │   │   │   │   └── statistics.page.spec.ts
│   │   │   │   │   └── tournament-history/
│   │   │   │   │       ├── tournament-history.page.ts
│   │   │   │   │       ├── tournament-history.page.html
│   │   │   │   │       ├── tournament-history.page.scss
│   │   │   │   │       └── tournament-history.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── statistics.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── stats-chart/
│   │   │   │   │   │   ├── stats-chart.component.ts
│   │   │   │   │   │   ├── stats-chart.component.html
│   │   │   │   │   │   ├── stats-chart.component.scss
│   │   │   │   │   │   └── stats-chart.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── statistics-routing.module.ts
│   │   │   │   └── statistics.module.ts
│   │   │   └── home/
│   │   │       ├── pages/
│   │   │       │   └── home/
│   │   │       │       ├── home.page.ts
│   │   │       │       ├── home.page.html
│   │   │       │       ├── home.page.scss
│   │   │       │       └── home.page.spec.ts
│   │   │       ├── home-routing.module.ts
│   │   │       └── home.module.ts
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── tab-layout/
│   │   │   │   │   ├── tab-layout.component.ts
│   │   │   │   │   ├── tab-layout.component.html
│   │   │   │   │   ├── tab-layout.component.scss
│   │   │   │   │   └── tab-layout.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── layout.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── icon/
│   │   │   └── favicon.png
│   │   ├── images/
│   │   │   ├── poker-chips.svg
│   │   │   └── tournament-bg.jpg
│   │   ├── sounds/
│   │   │   ├── level-up.mp3
│   │   │   └── timer-warning.mp3
│   │   ├── data/
│   │   │   ├── default-blind-structures.json
│   │   │   └── tournament-templates.json
│   │   └── i18n/
│   │       ├── en.json
│   │       └── es.json
│   ├── theme/
│   │   ├── variables.scss
│   │   ├── poker-theme.scss
│   │   └── responsive.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── test.ts
├── angular.json
├── ionic.config.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── karma.conf.js
├── capacitor.config.ts
├── .gitignore
└── README.md
```

## Key Models and Interfaces

### Tournament Model (`src/app/shared/models/tournament.model.ts`)

```typescript
export interface Tournament {
  id: string;
  name: string;
  startTime: Date;
  currentLevel: number;
  isPaused: boolean;
  isCompleted: boolean;
  blindStructure: BlindStructure;
  settings: TournamentSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface TournamentSettings {
  levelDuration: number; // in minutes
  breakFrequency: number; // levels between breaks
  breakDuration: number; // in minutes
  soundEnabled: boolean;
  autoAdvance: boolean;
}
```

### Level Model (`src/app/shared/models/level.model.ts`)

```typescript
export interface Level {
  levelNumber: number;
  smallBlind: number;
  bigBlind: number;
  ante?: number;
  duration: number; // in minutes
  isBreak: boolean;
  breakName?: string;
}

export interface BlindStructure {
  id: string;
  name: string;
  levels: Level[];
  description?: string;
  isDefault: boolean;
}
```

## Main App Routing (`src/app/app-routing.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "tournament-timer/:id",
    loadChildren: () => import("./features/tournament/tournament.module").then((m) => m.TournamentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Tab Layout Component (`src/app/layout/components/tab-layout/tab-layout.component.html`)

```html
<ion-header>
  <app-header></app-header>
</ion-header>

<ion-content>
  <ion-router-outlet></ion-router-outlet>
</ion-content>

<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/tabs/home">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tournaments" href="/tabs/tournaments">
      <ion-icon name="trophy"></ion-icon>
      <ion-label>Tournaments</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="timer" href="/tabs/timer">
      <ion-icon name="timer"></ion-icon>
      <ion-label>Timer</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="statistics" href="/tabs/statistics">
      <ion-icon name="stats-chart"></ion-icon>
      <ion-label>Statistics</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="settings" href="/tabs/settings">
      <ion-icon name="settings"></ion-icon>
      <ion-label>Settings</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

## Header Component (`src/app/shared/components/header/header.component.html`)

```html
<ion-toolbar color="primary">
  <ion-title>{{ title }}</ion-title>

  <ion-buttons slot="end">
    <ion-button (click)="openSettings()" *ngIf="showSettings">
      <ion-icon name="settings-outline"></ion-icon>
    </ion-button>

    <ion-button (click)="syncTournament()" *ngIf="showSync">
      <ion-icon name="sync-outline"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>
```

## Tournament Timer Service (`src/app/features/tournament/services/timer.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Subscription } from "rxjs";
import { Tournament, Level } from "../../../shared/models";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  private timerSubscription?: Subscription;
  private remainingTimeSubject = new BehaviorSubject<number>(0);
  private currentLevelSubject = new BehaviorSubject<number>(0);
  private isPausedSubject = new BehaviorSubject<boolean>(false);

  remainingTime$ = this.remainingTimeSubject.asObservable();
  currentLevel$ = this.currentLevelSubject.asObservable();
  isPaused$ = this.isPausedSubject.asObservable();

  startTimer(tournament: Tournament): void {
    this.stopTimer();

    const levelDuration = tournament.settings.levelDuration * 60; // Convert to seconds
    this.remainingTimeSubject.next(levelDuration);
    this.currentLevelSubject.next(tournament.currentLevel);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (!this.isPausedSubject.value) {
        const currentTime = this.remainingTimeSubject.value;
        if (currentTime > 0) {
          this.remainingTimeSubject.next(currentTime - 1);
        } else {
          this.advanceLevel(tournament);
        }
      }
    });
  }

  pauseTimer(): void {
    this.isPausedSubject.next(true);
  }

  resumeTimer(): void {
    this.isPausedSubject.next(false);
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private advanceLevel(tournament: Tournament): void {
    const nextLevel = tournament.currentLevel + 1;
    if (nextLevel < tournament.blindStructure.levels.length) {
      this.currentLevelSubject.next(nextLevel);
      const levelDuration = tournament.settings.levelDuration * 60;
      this.remainingTimeSubject.next(levelDuration);
    } else {
      this.stopTimer();
    }
  }

  syncLevel(level: number, time: number): void {
    this.currentLevelSubject.next(level);
    this.remainingTimeSubject.next(time);
  }

  getLevelsRemaining(tournament: Tournament): number {
    return tournament.blindStructure.levels.length - tournament.currentLevel - 1;
  }
}
```

## Tournament Timer Page (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.html`)

```html
<ion-content class="tournament-timer">
  <div class="timer-container">
    <!-- Current Level Display -->
    <div class="level-info">
      <h2>Level {{ currentLevel + 1 }}</h2>
      <div class="blinds">
        <span class="small-blind">{{ currentBlindLevel?.smallBlind | currency:'USD':'symbol':'1.0-0' }}</span>
        /
        <span class="big-blind">{{ currentBlindLevel?.bigBlind | currency:'USD':'symbol':'1.0-0' }}</span>
      </div>
      <div class="ante" *ngIf="currentBlindLevel?.ante">Ante: {{ currentBlindLevel?.ante | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>

    <!-- Timer Display -->
    <div class="timer-display">
      <app-countdown-timer [remainingTime]="remainingTime" [isPaused]="isPaused"> </app-countdown-timer>
    </div>

    <!-- Progress Info -->
    <div class="progress-info">
      <p>{{ levelsRemaining }} levels remaining</p>
      <ion-progress-bar [value]="getProgress()" color="secondary"> </ion-progress-bar>
    </div>

    <!-- Controls -->
    <div class="timer-controls">
      <ion-button (click)="pauseResumeTimer()" [color]="isPaused ? 'success' : 'warning'" size="large">
        <ion-icon [name]="isPaused ? 'play' : 'pause'"></ion-icon>
        {{ isPaused ? 'Resume' : 'Pause' }}
      </ion-button>

      <ion-button (click)="skipLevel()" color="tertiary" size="large">
        <ion-icon name="play-skip-forward"></ion-icon>
        Skip Level
      </ion-button>

      <ion-button (click)="openSyncModal()" fill="outline" size="large">
        <ion-icon name="sync"></ion-icon>
        Sync
      </ion-button>
    </div>

    <!-- Next Level Preview -->
    <div class="next-level" *ngIf="nextLevel">
      <h3>Next Level</h3>
      <div class="next-blinds">{{ nextLevel.smallBlind | currency:'USD':'symbol':'1.0-0' }} / {{ nextLevel.bigBlind | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>
  </div>
</ion-content>
```

## Countdown Timer Component (`src/app/shared/components/countdown-timer/countdown-timer.component.ts`)

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  template: `
    <div class="countdown-display" [class.warning]="isWarning" [class.paused]="isPaused">
      <span class="minutes">{{ formatTime(remainingTime).minutes }}</span>
      <span class="separator">:</span>
      <span class="seconds">{{ formatTime(remainingTime).seconds }}</span>
    </div>
  `,
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent {
  @Input() remainingTime: number = 0;
  @Input() isPaused: boolean = false;

  get isWarning(): boolean {
    return this.remainingTime <= 60; // Warning when less than 1 minute
  }

  formatTime(seconds: number): { minutes: string; seconds: string } {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  }
}
```

## Tournament Service (`src/app/features/tournament/services/tournament.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tournament, BlindStructure } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class TournamentService {
  private tournamentsSubject = new BehaviorSubject<Tournament[]>([]);
  private activeTournamentSubject = new BehaviorSubject<Tournament | null>(null);

  tournaments$ = this.tournamentsSubject.asObservable();
  activeTournament$ = this.activeTournamentSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadTournaments();
  }

  async createTournament(tournament: Partial<Tournament>): Promise<Tournament> {
    const newTournament: Tournament = {
      id: this.generateId(),
      name: tournament.name || "New Tournament",
      startTime: new Date(),
      currentLevel: 0,
      isPaused: false,
      isCompleted: false,
      blindStructure: tournament.blindStructure!,
      settings: tournament.settings!,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const tournaments = this.tournamentsSubject.value;
    tournaments.push(newTournament);
    this.tournamentsSubject.next(tournaments);
    await this.saveTournaments();

    return newTournament;
  }

  async updateTournament(tournament: Tournament): Promise<void> {
    tournament.updatedAt = new Date();
    const tournaments = this.tournamentsSubject.value;
    const index = tournaments.findIndex((t) => t.id === tournament.id);

    if (index !== -1) {
      tournaments[index] = tournament;
      this.tournamentsSubject.next(tournaments);
      await this.saveTournaments();
    }
  }

  setActiveTournament(tournament: Tournament): void {
    this.activeTournamentSubject.next(tournament);
  }

  syncTournament(level: number, remainingTime: number): void {
    const activeTournament = this.activeTournamentSubject.value;
    if (activeTournament) {
      activeTournament.currentLevel = level;
      this.updateTournament(activeTournament);
    }
  }

  private async loadTournaments(): Promise<void> {
    const tournaments = (await this.storageService.get("tournaments")) || [];
    this.tournamentsSubject.next(tournaments);
  }

  private async saveTournaments(): Promise<void> {
    await this.storageService.set("tournaments", this.tournamentsSubject.value);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
```

## Package.json Dependencies

```json
{
  "name": "poker-tournament-tracker",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "ionic:build": "ionic build",
    "ionic:serve": "ionic serve"
  },
  "dependencies": {
    "@angular/animations": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/core": "^16.0.0",
    "@angular/forms": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "@angular/router": "^16.0.0",
    "@capacitor/android": "^5.0.0",
    "@capacitor/app": "^5.0.0",
    "@capacitor/core": "^5.0.0",
    "@capacitor/haptics": "^5.0.0",
    "@capacitor/ios": "^5.0.0",
    "@capacitor/keyboard": "^5.0.0",
    "@capacitor/status-bar": "^5.0.0",
    "@ionic/angular": "^7.0.0",
    "@ionic/storage-angular": "^4.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.0.0",
    "@angular-eslint/builder": "^16.0.0",
    "@angular-eslint/eslint-plugin": "^16.0.0",
    "@angular-eslint/eslint-plugin-template": "^16.0.0",
    "@angular-eslint/schematics": "^16.0.0",
    "@angular-eslint/template-parser": "^16.0.0",
    "@angular/cli": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/compiler-cli": "^16.0.0",
    "@angular/language-service": "^16.0.0",
    "@capacitor/cli": "^5.0.0",
    "@ionic/angular-toolkit": "^9.0.0",
    "@types/jasmine": "~4.3.0",
    "@types/node": "^18.15.0",
    "@typescript-eslint/eslint-plugin": "5.59.0",
    "@typescript-eslint/parser": "5.59.0",
    "eslint": "^8.57.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "46.2.6",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "~4.6.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~6.4.0",
    "karma-chrome-headless": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.0.2"
  }
}
```

## Key Features Implementation

### 1. **Level and Blind Management**

- Configurable blind structures stored in JSON
- Support for antes and break levels
- Visual display of current and next level information

### 2. **Timer Functionality**

- Real-time countdown with pause/resume
- Visual warnings when time is running low
- Automatic level advancement
- Manual sync capability for level and time

### 3. **Tab Navigation**

- **Home**: Quick access and active tournament overview
- **Tournaments**: List and manage tournaments
- **Timer**: Main tournament timer interface
- **Statistics**: Tournament history and analytics
- **Settings**: App configuration and blind structure management

### 4. **Header Integration**

- Context-aware settings button
- Sync functionality

# Poker Tournament Tracker - Ionic Angular App

## Project Structure

```
poker-tournament-tracker/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── index.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── http-error.interceptor.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── storage.service.ts
│   │   │   │   ├── platform.service.ts
│   │   │   │   └── index.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   ├── header.component.scss
│   │   │   │   │   └── header.component.spec.ts
│   │   │   │   ├── countdown-timer/
│   │   │   │   │   ├── countdown-timer.component.ts
│   │   │   │   │   ├── countdown-timer.component.html
│   │   │   │   │   ├── countdown-timer.component.scss
│   │   │   │   │   └── countdown-timer.component.spec.ts
│   │   │   │   ├── level-display/
│   │   │   │   │   ├── level-display.component.ts
│   │   │   │   │   ├── level-display.component.html
│   │   │   │   │   ├── level-display.component.scss
│   │   │   │   │   └── level-display.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   ├── pipes/
│   │   │   │   ├── time-format.pipe.ts
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── index.ts
│   │   │   ├── directives/
│   │   │   │   └── index.ts
│   │   │   ├── models/
│   │   │   │   ├── tournament.model.ts
│   │   │   │   ├── level.model.ts
│   │   │   │   ├── blind-structure.model.ts
│   │   │   │   └── index.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── tournament/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── tournament-list/
│   │   │   │   │   │   ├── tournament-list.page.ts
│   │   │   │   │   │   ├── tournament-list.page.html
│   │   │   │   │   │   ├── tournament-list.page.scss
│   │   │   │   │   │   └── tournament-list.page.spec.ts
│   │   │   │   │   ├── tournament-detail/
│   │   │   │   │   │   ├── tournament-detail.page.ts
│   │   │   │   │   │   ├── tournament-detail.page.html
│   │   │   │   │   │   ├── tournament-detail.page.scss
│   │   │   │   │   │   └── tournament-detail.page.spec.ts
│   │   │   │   │   ├── tournament-create/
│   │   │   │   │   │   ├── tournament-create.page.ts
│   │   │   │   │   │   ├── tournament-create.page.html
│   │   │   │   │   │   ├── tournament-create.page.scss
│   │   │   │   │   │   └── tournament-create.page.spec.ts
│   │   │   │   │   └── tournament-timer/
│   │   │   │   │       ├── tournament-timer.page.ts
│   │   │   │   │       ├── tournament-timer.page.html
│   │   │   │   │       ├── tournament-timer.page.scss
│   │   │   │   │       └── tournament-timer.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── tournament.service.ts
│   │   │   │   │   ├── timer.service.ts
│   │   │   │   │   ├── blind-structure.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── blind-level-card/
│   │   │   │   │   │   ├── blind-level-card.component.ts
│   │   │   │   │   │   ├── blind-level-card.component.html
│   │   │   │   │   │   ├── blind-level-card.component.scss
│   │   │   │   │   │   └── blind-level-card.component.spec.ts
│   │   │   │   │   ├── tournament-controls/
│   │   │   │   │   │   ├── tournament-controls.component.ts
│   │   │   │   │   │   ├── tournament-controls.component.html
│   │   │   │   │   │   ├── tournament-controls.component.scss
│   │   │   │   │   │   └── tournament-controls.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── tournament-routing.module.ts
│   │   │   │   └── tournament.module.ts
│   │   │   ├── settings/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── settings.page.ts
│   │   │   │   │   │   ├── settings.page.html
│   │   │   │   │   │   ├── settings.page.scss
│   │   │   │   │   │   └── settings.page.spec.ts
│   │   │   │   │   ├── blind-structure-editor/
│   │   │   │   │   │   ├── blind-structure-editor.page.ts
│   │   │   │   │   │   ├── blind-structure-editor.page.html
│   │   │   │   │   │   ├── blind-structure-editor.page.scss
│   │   │   │   │   │   └── blind-structure-editor.page.spec.ts
│   │   │   │   │   └── preferences/
│   │   │   │   │       ├── preferences.page.ts
│   │   │   │   │       ├── preferences.page.html
│   │   │   │   │       ├── preferences.page.scss
│   │   │   │   │       └── preferences.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── settings.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── settings-item/
│   │   │   │   │   │   ├── settings-item.component.ts
│   │   │   │   │   │   ├── settings-item.component.html
│   │   │   │   │   │   ├── settings-item.component.scss
│   │   │   │   │   │   └── settings-item.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── settings-routing.module.ts
│   │   │   │   └── settings.module.ts
│   │   │   ├── statistics/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── statistics/
│   │   │   │   │   │   ├── statistics.page.ts
│   │   │   │   │   │   ├── statistics.page.html
│   │   │   │   │   │   ├── statistics.page.scss
│   │   │   │   │   │   └── statistics.page.spec.ts
│   │   │   │   │   └── tournament-history/
│   │   │   │   │       ├── tournament-history.page.ts
│   │   │   │   │       ├── tournament-history.page.html
│   │   │   │   │       ├── tournament-history.page.scss
│   │   │   │   │       └── tournament-history.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── statistics.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── stats-chart/
│   │   │   │   │   │   ├── stats-chart.component.ts
│   │   │   │   │   │   ├── stats-chart.component.html
│   │   │   │   │   │   ├── stats-chart.component.scss
│   │   │   │   │   │   └── stats-chart.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── statistics-routing.module.ts
│   │   │   │   └── statistics.module.ts
│   │   │   └── home/
│   │   │       ├── pages/
│   │   │       │   └── home/
│   │   │       │       ├── home.page.ts
│   │   │       │       ├── home.page.html
│   │   │       │       ├── home.page.scss
│   │   │       │       └── home.page.spec.ts
│   │   │       ├── home-routing.module.ts
│   │   │       └── home.module.ts
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── tab-layout/
│   │   │   │   │   ├── tab-layout.component.ts
│   │   │   │   │   ├── tab-layout.component.html
│   │   │   │   │   ├── tab-layout.component.scss
│   │   │   │   │   └── tab-layout.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── layout.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── icon/
│   │   │   └── favicon.png
│   │   ├── images/
│   │   │   ├── poker-chips.svg
│   │   │   └── tournament-bg.jpg
│   │   ├── sounds/
│   │   │   ├── level-up.mp3
│   │   │   └── timer-warning.mp3
│   │   ├── data/
│   │   │   ├── default-blind-structures.json
│   │   │   └── tournament-templates.json
│   │   └── i18n/
│   │       ├── en.json
│   │       └── es.json
│   ├── theme/
│   │   ├── variables.scss
│   │   ├── poker-theme.scss
│   │   └── responsive.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── test.ts
├── angular.json
├── ionic.config.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── karma.conf.js
├── capacitor.config.ts
├── .gitignore
└── README.md
```

## Key Models and Interfaces

### Tournament Model (`src/app/shared/models/tournament.model.ts`)

```typescript
export interface Tournament {
  id: string;
  name: string;
  startTime: Date;
  currentLevel: number;
  isPaused: boolean;
  isCompleted: boolean;
  blindStructure: BlindStructure;
  settings: TournamentSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface TournamentSettings {
  levelDuration: number; // in minutes
  breakFrequency: number; // levels between breaks
  breakDuration: number; // in minutes
  soundEnabled: boolean;
  autoAdvance: boolean;
}
```

### Level Model (`src/app/shared/models/level.model.ts`)

```typescript
export interface Level {
  levelNumber: number;
  smallBlind: number;
  bigBlind: number;
  ante?: number;
  duration: number; // in minutes
  isBreak: boolean;
  breakName?: string;
}

export interface BlindStructure {
  id: string;
  name: string;
  levels: Level[];
  description?: string;
  isDefault: boolean;
}
```

## Main App Routing (`src/app/app-routing.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "tournament-timer/:id",
    loadChildren: () => import("./features/tournament/tournament.module").then((m) => m.TournamentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Tab Layout Component (`src/app/layout/components/tab-layout/tab-layout.component.html`)

```html
<ion-header>
  <app-header></app-header>
</ion-header>

<ion-content>
  <ion-router-outlet></ion-router-outlet>
</ion-content>

<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/tabs/home">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tournaments" href="/tabs/tournaments">
      <ion-icon name="trophy"></ion-icon>
      <ion-label>Tournaments</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="timer" href="/tabs/timer">
      <ion-icon name="timer"></ion-icon>
      <ion-label>Timer</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="statistics" href="/tabs/statistics">
      <ion-icon name="stats-chart"></ion-icon>
      <ion-label>Statistics</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="settings" href="/tabs/settings">
      <ion-icon name="settings"></ion-icon>
      <ion-label>Settings</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

## Header Component (`src/app/shared/components/header/header.component.html`)

```html
<ion-toolbar color="primary">
  <ion-title>{{ title }}</ion-title>

  <ion-buttons slot="end">
    <ion-button (click)="openSettings()" *ngIf="showSettings">
      <ion-icon name="settings-outline"></ion-icon>
    </ion-button>

    <ion-button (click)="syncTournament()" *ngIf="showSync">
      <ion-icon name="sync-outline"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>
```

## Tournament Timer Service (`src/app/features/tournament/services/timer.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Subscription } from "rxjs";
import { Tournament, Level } from "../../../shared/models";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  private timerSubscription?: Subscription;
  private remainingTimeSubject = new BehaviorSubject<number>(0);
  private currentLevelSubject = new BehaviorSubject<number>(0);
  private isPausedSubject = new BehaviorSubject<boolean>(false);

  remainingTime$ = this.remainingTimeSubject.asObservable();
  currentLevel$ = this.currentLevelSubject.asObservable();
  isPaused$ = this.isPausedSubject.asObservable();

  startTimer(tournament: Tournament): void {
    this.stopTimer();

    const levelDuration = tournament.settings.levelDuration * 60; // Convert to seconds
    this.remainingTimeSubject.next(levelDuration);
    this.currentLevelSubject.next(tournament.currentLevel);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (!this.isPausedSubject.value) {
        const currentTime = this.remainingTimeSubject.value;
        if (currentTime > 0) {
          this.remainingTimeSubject.next(currentTime - 1);
        } else {
          this.advanceLevel(tournament);
        }
      }
    });
  }

  pauseTimer(): void {
    this.isPausedSubject.next(true);
  }

  resumeTimer(): void {
    this.isPausedSubject.next(false);
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private advanceLevel(tournament: Tournament): void {
    const nextLevel = tournament.currentLevel + 1;
    if (nextLevel < tournament.blindStructure.levels.length) {
      this.currentLevelSubject.next(nextLevel);
      const levelDuration = tournament.settings.levelDuration * 60;
      this.remainingTimeSubject.next(levelDuration);
    } else {
      this.stopTimer();
    }
  }

  syncLevel(level: number, time: number): void {
    this.currentLevelSubject.next(level);
    this.remainingTimeSubject.next(time);
  }

  getLevelsRemaining(tournament: Tournament): number {
    return tournament.blindStructure.levels.length - tournament.currentLevel - 1;
  }
}
```

## Tournament Timer Page (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.html`)

```html
<ion-content class="tournament-timer">
  <div class="timer-container">
    <!-- Current Level Display -->
    <div class="level-info">
      <h2>Level {{ currentLevel + 1 }}</h2>
      <div class="blinds">
        <span class="small-blind">{{ currentBlindLevel?.smallBlind | currency:'USD':'symbol':'1.0-0' }}</span>
        /
        <span class="big-blind">{{ currentBlindLevel?.bigBlind | currency:'USD':'symbol':'1.0-0' }}</span>
      </div>
      <div class="ante" *ngIf="currentBlindLevel?.ante">Ante: {{ currentBlindLevel?.ante | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>

    <!-- Timer Display -->
    <div class="timer-display">
      <app-countdown-timer [remainingTime]="remainingTime" [isPaused]="isPaused"> </app-countdown-timer>
    </div>

    <!-- Progress Info -->
    <div class="progress-info">
      <p>{{ levelsRemaining }} levels remaining</p>
      <ion-progress-bar [value]="getProgress()" color="secondary"> </ion-progress-bar>
    </div>

    <!-- Controls -->
    <div class="timer-controls">
      <ion-button (click)="pauseResumeTimer()" [color]="isPaused ? 'success' : 'warning'" size="large">
        <ion-icon [name]="isPaused ? 'play' : 'pause'"></ion-icon>
        {{ isPaused ? 'Resume' : 'Pause' }}
      </ion-button>

      <ion-button (click)="skipLevel()" color="tertiary" size="large">
        <ion-icon name="play-skip-forward"></ion-icon>
        Skip Level
      </ion-button>

      <ion-button (click)="openSyncModal()" fill="outline" size="large">
        <ion-icon name="sync"></ion-icon>
        Sync
      </ion-button>
    </div>

    <!-- Next Level Preview -->
    <div class="next-level" *ngIf="nextLevel">
      <h3>Next Level</h3>
      <div class="next-blinds">{{ nextLevel.smallBlind | currency:'USD':'symbol':'1.0-0' }} / {{ nextLevel.bigBlind | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>
  </div>
</ion-content>
```

## Countdown Timer Component (`src/app/shared/components/countdown-timer/countdown-timer.component.ts`)

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  template: `
    <div class="countdown-display" [class.warning]="isWarning" [class.paused]="isPaused">
      <span class="minutes">{{ formatTime(remainingTime).minutes }}</span>
      <span class="separator">:</span>
      <span class="seconds">{{ formatTime(remainingTime).seconds }}</span>
    </div>
  `,
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent {
  @Input() remainingTime: number = 0;
  @Input() isPaused: boolean = false;

  get isWarning(): boolean {
    return this.remainingTime <= 60; // Warning when less than 1 minute
  }

  formatTime(seconds: number): { minutes: string; seconds: string } {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  }
}
```

## Tournament Service (`src/app/features/tournament/services/tournament.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tournament, BlindStructure } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class TournamentService {
  private tournamentsSubject = new BehaviorSubject<Tournament[]>([]);
  private activeTournamentSubject = new BehaviorSubject<Tournament | null>(null);

  tournaments$ = this.tournamentsSubject.asObservable();
  activeTournament$ = this.activeTournamentSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadTournaments();
  }

  async createTournament(tournament: Partial<Tournament>): Promise<Tournament> {
    const newTournament: Tournament = {
      id: this.generateId(),
      name: tournament.name || "New Tournament",
      startTime: new Date(),
      currentLevel: 0,
      isPaused: false,
      isCompleted: false,
      blindStructure: tournament.blindStructure!,
      settings: tournament.settings!,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const tournaments = this.tournamentsSubject.value;
    tournaments.push(newTournament);
    this.tournamentsSubject.next(tournaments);
    await this.saveTournaments();

    return newTournament;
  }

  async updateTournament(tournament: Tournament): Promise<void> {
    tournament.updatedAt = new Date();
    const tournaments = this.tournamentsSubject.value;
    const index = tournaments.findIndex((t) => t.id === tournament.id);

    if (index !== -1) {
      tournaments[index] = tournament;
      this.tournamentsSubject.next(tournaments);
      await this.saveTournaments();
    }
  }

  setActiveTournament(tournament: Tournament): void {
    this.activeTournamentSubject.next(tournament);
  }

  syncTournament(level: number, remainingTime: number): void {
    const activeTournament = this.activeTournamentSubject.value;
    if (activeTournament) {
      activeTournament.currentLevel = level;
      this.updateTournament(activeTournament);
    }
  }

  private async loadTournaments(): Promise<void> {
    const tournaments = (await this.storageService.get("tournaments")) || [];
    this.tournamentsSubject.next(tournaments);
  }

  private async saveTournaments(): Promise<void> {
    await this.storageService.set("tournaments", this.tournamentsSubject.value);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
```

## Package.json Dependencies

```json
{
  "name": "poker-tournament-tracker",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "ionic:build": "ionic build",
    "ionic:serve": "ionic serve"
  },
  "dependencies": {
    "@angular/animations": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/core": "^16.0.0",
    "@angular/forms": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "@angular/router": "^16.0.0",
    "@capacitor/android": "^5.0.0",
    "@capacitor/app": "^5.0.0",
    "@capacitor/core": "^5.0.0",
    "@capacitor/haptics": "^5.0.0",
    "@capacitor/ios": "^5.0.0",
    "@capacitor/keyboard": "^5.0.0",
    "@capacitor/status-bar": "^5.0.0",
    "@ionic/angular": "^7.0.0",
    "@ionic/storage-angular": "^4.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.0.0",
    "@angular-eslint/builder": "^16.0.0",
    "@angular-eslint/eslint-plugin": "^16.0.0",
    "@angular-eslint/eslint-plugin-template": "^16.0.0",
    "@angular-eslint/schematics": "^16.0.0",
    "@angular-eslint/template-parser": "^16.0.0",
    "@angular/cli": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/compiler-cli": "^16.0.0",
    "@angular/language-service": "^16.0.0",
    "@capacitor/cli": "^5.0.0",
    "@ionic/angular-toolkit": "^9.0.0",
    "@types/jasmine": "~4.3.0",
    "@types/node": "^18.15.0",
    "@typescript-eslint/eslint-plugin": "5.59.0",
    "@typescript-eslint/parser": "5.59.0",
    "eslint": "^8.57.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "46.2.6",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "~4.6.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~6.4.0",
    "karma-chrome-headless": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.0.2"
  }
}
```

## Key Features Implementation

### 1. **Level and Blind Management**

- Configurable blind structures stored in JSON
- Support for antes and break levels
- Visual display of current and next level information

### 2. **Timer Functionality**

- Real-time countdown with pause/resume
- Visual warnings when time is running low
- Automatic level advancement
- Manual sync capability for level and time

### 3. **Tab Navigation**

- **Home**: Quick access and active tournament overview
- **Tournaments**: List and manage tournaments
- **Timer**: Main tournament timer interface
- **Statistics**: Tournament history and analytics
- **Settings**: App configuration and blind structure management

### 4. **Header Integration**

- Context-aware settings button
- Sync functionality
- Dynamic title updates

## Core Services Implementation

### Storage Service (`src/app/core/services/storage.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async set(key: string, value: any): Promise<any> {
    return this._storage?.set(key, value);
  }

  async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  async remove(key: string): Promise<any> {
    return this._storage?.remove(key);
  }

  async clear(): Promise<void> {
    return this._storage?.clear();
  }

  async keys(): Promise<string[]> {
    return this._storage?.keys() || [];
  }
}
```

### Blind Structure Service (`src/app/features/tournament/services/blind-structure.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BlindStructure, Level } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class BlindStructureService {
  private blindStructuresSubject = new BehaviorSubject<BlindStructure[]>([]);

  blindStructures$ = this.blindStructuresSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadBlindStructures();
  }

  async createBlindStructure(structure: Partial<BlindStructure>): Promise<BlindStructure> {
    const newStructure: BlindStructure = {
      id: this.generateId(),
      name: structure.name || "Custom Structure",
      levels: structure.levels || this.getDefaultLevels(),
      description: structure.description,
      isDefault: false,
    };

    const structures = this.blindStructuresSubject.value;
    structures.push(newStructure);
    this.blindStructuresSubject.next(structures);
    await this.saveBlindStructures();

    return newStructure;
  }

  async updateBlindStructure(structure: BlindStructure): Promise<void> {
    const structures = this.blindStructuresSubject.value;
    const index = structures.findIndex((s) => s.id === structure.id);

    if (index !== -1) {
      structures[index] = structure;
      this.blindStructuresSubject.next(structures);
      await this.saveBlindStructures();
    }
  }

  async deleteBlindStructure(id: string): Promise<void> {
    const structures = this.blindStructuresSubject.value.filter((s) => s.id !== id);
    this.blindStructuresSubject.next(structures);
    await this.saveBlindStructures();
  }

  getDefaultLevels(): Level[] {
    return [
      { levelNumber: 1, smallBlind: 25, bigBlind: 50, duration: 15, isBreak: false },
      { levelNumber: 2, smallBlind: 50, bigBlind: 100, duration: 15, isBreak: false },
      { levelNumber: 3, smallBlind: 75, bigBlind: 150, duration: 15, isBreak: false },
      { levelNumber: 4, smallBlind: 100, bigBlind: 200, duration: 15, isBreak: false },
      { levelNumber: 5, smallBlind: 0, bigBlind: 0, duration: 15, isBreak: true, breakName: "15 Minute Break" },
      { levelNumber: 6, smallBlind: 150, bigBlind: 300, duration: 20, isBreak: false },
      { levelNumber: 7, smallBlind: 200, bigBlind: 400, duration: 20, isBreak: false },
      { levelNumber: 8, smallBlind: 300, bigBlind: 600, duration: 20, isBreak: false },
      { levelNumber: 9, smallBlind: 400, bigBlind: 800, duration: 20, isBreak: false },
      { levelNumber: 10, smallBlind: 500, bigBlind: 1000, ante: 100, duration: 20, isBreak: false },
    ];
  }

  private async loadBlindStructures(): Promise<void> {
    let structures = (await this.storageService.get("blindStructures")) || [];

    if (structures.length === 0) {
      structures = [this.createDefaultStructure()];
      await this.storageService.set("blindStructures", structures);
    }

    this.blindStructuresSubject.next(structures);
  }

  private async saveBlindStructures(): Promise<void> {
    await this.storageService.set("blindStructures", this.blindStructuresSubject.value);
  }

  private createDefaultStructure(): BlindStructure {
    return {
      id: "default",
      name: "Standard Tournament",
      levels: this.getDefaultLevels(),
      description: "Standard blind structure for poker tournaments",
      isDefault: true,
    };
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
```

## Main Pages Implementation

### Tournament List Page (`src/app/features/tournament/pages/tournament-list/tournament-list.page.html`)

```html
<ion-content>
  <div class="tournaments-container">
    <ion-card *ngFor="let tournament of tournaments" (click)="selectTournament(tournament)" [class.active]="tournament.id === activeTournament?.id">
      <ion-card-header>
        <ion-card-title>{{ tournament.name }}</ion-card-title>
        <ion-card-subtitle> {{ tournament.blindStructure.name }} • Level {{ tournament.currentLevel + 1 }}/{{ tournament.blindStructure.levels.length }} </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div class="tournament-info">
          <div class="status">
            <ion-badge [color]="getStatusColor(tournament)"> {{ getStatusText(tournament) }} </ion-badge>
          </div>

          <div class="created-date">Created: {{ tournament.createdAt | date:'short' }}</div>
        </div>
      </ion-card-content>

      <ion-row class="tournament-actions">
        <ion-col>
          <ion-button fill="outline" size="small" (click)="editTournament(tournament, $event)">
            <ion-icon name="create-outline"></ion-icon>
            Edit
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button fill="outline" size="small" color="danger" (click)="deleteTournament(tournament, $event)">
            <ion-icon name="trash-outline"></ion-icon>
            Delete
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-card>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button (click)="createNewTournament()">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</ion-content>
```

### Settings Page (`src/app/features/settings/pages/settings/settings.page.html`)

```html
<ion-content>
  <div class="settings-container">
    <!-- Tournament Settings -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Tournament Settings</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label>Default Level Duration</ion-label>
          <ion-select [(ngModel)]="settings.defaultLevelDuration" interface="popover">
            <ion-select-option value="10">10 minutes</ion-select-option>
            <ion-select-option value="15">15 minutes</ion-select-option>
            <ion-select-option value="20">20 minutes</ion-select-option>
            <ion-select-option value="30">30 minutes</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Break Frequency</ion-label>
          <ion-select [(ngModel)]="settings.breakFrequency" interface="popover">
            <ion-select-option value="3">Every 3 levels</ion-select-option>
            <ion-select-option value="4">Every 4 levels</ion-select-option>
            <ion-select-option value="5">Every 5 levels</ion-select-option>
            <ion-select-option value="6">Every 6 levels</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Sound Notifications</ion-label>
          <ion-toggle [(ngModel)]="settings.soundEnabled"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Auto Advance Levels</ion-label>
          <ion-toggle [(ngModel)]="settings.autoAdvance"></ion-toggle>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Blind Structures -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Blind Structures</ion-card-title>
        <ion-card-subtitle>Manage tournament blind structures</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <ion-button expand="block" fill="outline" (click)="manageBlindStructures()">
          <ion-icon name="list-outline" slot="start"></ion-icon>
          Manage Blind Structures
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="createBlindStructure()">
          <ion-icon name="add-outline" slot="start"></ion-icon>
          Create New Structure
        </ion-button>
      </ion-card-content>
    </ion-card>

    <!-- App Settings -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>App Settings</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label>Keep Screen On</ion-label>
          <ion-toggle [(ngModel)]="settings.keepScreenOn"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Dark Mode</ion-label>
          <ion-toggle [(ngModel)]="settings.darkMode" (ionChange)="toggleDarkMode($event)"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Vibration</ion-label>
          <ion-toggle [(ngModel)]="settings.vibrationEnabled"></ion-toggle>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Data Management -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Data Management</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-button expand="block" fill="outline" (click)="exportData()">
          <ion-icon name="download-outline" slot="start"></ion-icon>
          Export Tournament Data
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="importData()">
          <ion-icon name="cloud-upload-outline" slot="start"></ion-icon>
          Import Tournament Data
        </ion-button>

        <ion-button expand="block" color="danger" fill="outline" (click)="clearAllData()">
          <ion-icon name="trash-outline" slot="start"></ion-icon>
          Clear All Data
        </ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</ion-content>
```

### Home Page (`src/app/features/home/pages/home/home.page.html`)

```html
<ion-content>
  <div class="home-container">
    <!-- Active Tournament Card -->
    <ion-card *ngIf="activeTournament" class="active-tournament-card">
      <ion-card-header>
        <ion-card-title>{{ activeTournament.name }}</ion-card-title>
        <ion-card-subtitle>Active Tournament</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div class="tournament-status">
          <div class="current-level">
            <h3>Level {{ activeTournament.currentLevel + 1 }}</h3>
            <p>{{ getCurrentBlindText(activeTournament) }}</p>
          </div>

          <div class="time-remaining">
            <app-countdown-timer [remainingTime]="remainingTime" [isPaused]="isPaused"> </app-countdown-timer>
          </div>
        </div>

        <ion-button expand="block" (click)="openTournamentTimer()">
          <ion-icon name="timer-outline" slot="start"></ion-icon>
          Open Timer
        </ion-button>
      </ion-card-content>
    </ion-card>

    <!-- Quick Actions -->
    <ion-card class="quick-actions">
      <ion-card-header>
        <ion-card-title>Quick Actions</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-row>
          <ion-col size="6">
            <ion-button expand="block" fill="outline" (click)="createTournament()">
              <ion-icon name="add-circle-outline" slot="start"></ion-icon>
              New Tournament
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button expand="block" fill="outline" (click)="viewTournaments()">
              <ion-icon name="list-outline" slot="start"></ion-icon>
              View All
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card-content>
    </ion-card>

    <!-- Recent Tournaments -->
    <ion-card *ngIf="recentTournaments.length > 0">
      <ion-card-header>
        <ion-card-title>Recent Tournaments</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item *ngFor="let tournament of recentTournaments" button (click)="selectTournament(tournament)">
          <ion-label>
            <h3>{{ tournament.name }}</h3>
            <p>{{ tournament.createdAt | date:'short' }}</p>
          </ion-label>
          <ion-badge slot="end" [color]="getStatusColor(tournament)"> {{ getStatusText(tournament) }} </ion-badge>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Getting Started (if no tournaments) -->
    <ion-card *ngIf="!activeTournament && recentTournaments.length === 0" class="getting-started">
      <ion-card-header>
        <ion-card-title>Welcome to Poker Tournament Tracker</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <p>Get started by creating your first tournament.</p>
        <ion-button expand="block" (click)="createTournament()">
          <ion-icon name="rocket-outline" slot="start"></ion-icon>
          Create First Tournament
        </ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</ion-content>
```

## Tournament Timer Page Implementation (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.ts`)

```typescript
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, AlertController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Tournament, Level } from "../../../../shared/models";
import { TournamentService } from "../../services/tournament.service";
import { TimerService } from "../../services/timer.service";

@Component({
  selector: "app-tournament-timer",
  templateUrl: "./tournament-timer.page.html",
  styleUrls: ["./tournament-timer.page.scss"],
})
export class TournamentTimerPage implements OnInit, OnDestroy {
  tournament?: Tournament;
  currentLevel: number = 0;
  remainingTime: number = 0;
  isPaused: boolean = false;
  levelsRemaining: number = 0;

  currentBlindLevel?: Level;
  nextLevel?: Level;

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private tournamentService: TournamentService, private timerService: TimerService, private modalController: ModalController, private alertController: AlertController) {}

  ngOnInit() {
    this.loadTournament();
    this.subscribeToTimer();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.timerService.stopTimer();
  }

  private loadTournament() {
    const tournamentId = this.route.snapshot.paramMap.get("id");
    if (tournamentId) {
      this.subscriptions.push(
        this.tournamentService.tournaments$.subscribe((tournaments) => {
          this.tournament = tournaments.find((t) => t.id === tournamentId);
          if (this.tournament) {
            this.updateLevelInfo();
            this.timerService.startTimer(this.tournament);
          }
        })
      );
    }
  }

  private subscribeToTimer() {
    this.subscriptions.push(
      this.timerService.currentLevel$.subscribe((level) => {
        this.currentLevel = level;
        this.updateLevelInfo();
      }),
      this.timerService.remainingTime$.subscribe((time) => {
        this.remainingTime = time;
      }),
      this.timerService.isPaused$.subscribe((paused) => {
        this.isPaused = paused;
      })
    );
  }

  private updateLevelInfo() {
    if (this.tournament) {
      this.currentBlindLevel = this.tournament.blindStructure.levels[this.currentLevel];
      this.nextLevel = this.tournament.blindStructure.levels[this.currentLevel + 1];
      this.levelsRemaining = this.timerService.getLevelsRemaining(this.tournament);
    }
  }

  pauseResumeTimer() {
    if (this.isPaused) {
      this.timerService.resumeTimer();
    } else {
      this.timerService.pauseTimer();
    }
  }

  async skipLevel() {
    const alert = await this.alertController.create({
      header: "Skip Level",
      message: "Are you sure you want to advance to the next level?",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Skip",
          handler: () => {
            if (this.tournament) {
              const nextLevel = this.currentLevel + 1;
              const levelDuration = this.tournament.settings.levelDuration * 60;
              this.timerService.syncLevel(nextLevel, levelDuration);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async openSyncModal() {
    const alert = await this.alertController.create({
      header: "Sync Tournament",
      message: "Manually sync the current level and time",
      inputs: [
        {
          name: "level",
          type: "number",
          placeholder: "Level number",
          value: this.currentLevel + 1,
          min: 1,
          max: this.tournament?.blindStructure.levels.length || 1,
        },
        {
          name: "minutes",
          type: "number",
          placeholder: "Minutes remaining",
          value: Math.floor(this.remainingTime / 60),
          min: 0,
          max: 60,
        },
        {
          name: "seconds",
          type: "number",
          placeholder: "Seconds remaining",
          value: this.remainingTime % 60,
          min: 0,
          max: 59,
        },
      ],
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Sync",
          handler: (data) => {
            const level = parseInt(data.level) - 1; // Convert to 0-based index
            const time = parseInt(data.minutes) * 60 + parseInt(data.seconds);
            this.timerService.syncLevel(level, time);
            this.tournamentService.syncTournament(level, time);
          },
        },
      ],
    });
    await alert.present();
  }

  getProgress(): number {
    if (!this.tournament) return 0;
    return (this.currentLevel + 1) / this.tournament.blindStructure.levels.length;
  }
}
```

## Styling and Themes

### Variables (`src/theme/variables.scss`)

```scss
:root {
  /** Poker Tournament Theme **/
  --ion-color-primary: #1a472a;
  --ion-color-primary-rgb: 26, 71, 42;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #174025;
  --ion-color-primary-tint: #31593f;

  --ion-color-secondary: #d4af37;
  --ion-color-secondary-rgb: 212, 175, 55;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #bb9a31;
  --ion-color-secondary-tint: #d8b74b;

  --ion-color-warning: #ffc409;
  --ion-color-danger: #eb445a;
  --ion-color-success: #2dd36f;

  /** Custom Poker Colors **/
  --poker-green: #1a472a;
  --poker-gold: #d4af37;
  --poker-red: #8b0000;
  --poker-black: #2c2c2c;
}
```

### Tournament Timer Styles (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.scss`)

```scss
.tournament-timer {
  .timer-container {
    padding: 20px;
    text-align: center;

    .level-info {
      background: var(--ion-color-light);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--poker-green);
        margin: 0 0 16px 0;
      }

      .blinds {
        font-size: 2rem;
        font-weight: 600;
        color: var(--ion-color-dark);

        .small-blind,
        .big-blind {
          color: var(--poker-gold);
        }
      }

      .ante {
        font-size: 1.2rem;
        color: var(--ion-color-medium);
        margin-top: 8px;
      }
    }

    .timer-display {
      margin: 32px 0;

      .countdown-display {
        font-size: 5rem;
        font-weight: bold;
        color: var(--ion-color-dark);
        font-family: "Courier New", monospace;

        &.warning {
          color: var(--ion-color-danger);
          animation: pulse 1s infinite;
        }

        &.paused {
          opacity: 0.6;
        }

        .separator {
          animation: blink 1s infinite;
        }
      }
    }

    .progress-info {
      margin: 24px 0;

      p {
        font-size: 1.1rem;
        color: var(--ion-color-medium);
        margin-bottom: 12px;
      }
    }

    .timer-controls {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 32px 0;

      ion-button {
        min-width: 120px;
      }
    }

    .next-level {
      background: var(--ion-color-light);
      border-radius: 12px;
      padding: 16px;
      margin-top: 24px;

      h3 {
        color: var(--ion-color-medium);
        font-size: 1rem;
        margin: 0 0 8px 0;
      }

      .next-blinds {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--poker-green);
      }
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
```

## Module Structure

### Tournament Module (`src/app/features/tournament/tournament.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../../shared/shared.module";
import { TournamentRoutingModule } from "./tournament-routing.module";

// Pages
import { TournamentListPage } from "./pages/tournament-list/tournament-list.page";
import { TournamentDetailPage } from "./pages/tournament-detail/tournament-detail.page";
import { TournamentCreatePage } from "./pages/tournament-create/tournament-create.page";
import { TournamentTimerPage } from "./pages/tournament-timer/tournament-timer.page";

// Components
import { BlindLevelCardComponent } from "./components/blind-level-card/blind-level-card.component";
import { TournamentControlsComponent } from "./components/tournament-controls/tournament-controls.component";

@NgModule({
  declarations: [TournamentListPage, TournamentDetailPage, TournamentCreatePage, TournamentTimerPage, BlindLevelCardComponent, TournamentControlsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, SharedModule, TournamentRoutingModule],
})
export class TournamentModule {}
```

### Shared Module (`src/app/shared/shared.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

// Components
import { HeaderComponent } from "./components/header/header.component";
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { LevelDisplayComponent } from "./components/level-display/level-display.component";

// Pipes
import { TimeFormatPipe } from "./pipes/time-format.pipe";
import { CurrencyFormatPipe } from "./pipes/currency-format.pipe";

@NgModule({
  declarations: [HeaderComponent, CountdownTimerComponent, LevelDisplayComponent, TimeFormatPipe, CurrencyFormatPipe],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, CountdownTimerComponent, LevelDisplayComponent, TimeFormatPipe, CurrencyFormatPipe, CommonModule, IonicModule, FormsModule],
})
export class SharedModule {}
```

## Installation and Setup Commands

```bash
# Install Ionic CLI
npm install -g @ionic/cli

# Create new Ionic Angular project
ionic start poker-tournament-tracker tabs --type=angular

# Install additional dependencies
npm install @ionic/storage-angular
npm install @capacitor/haptics
npm install @capacitor/status-bar

# Add platforms
ionic capacitor add android
ionic capacitor add ios

# Generate components and services
ionic generate page features/tournament/pages/tournament-timer
ionic generate service features/tournament/services/timer
ionic generate component shared/components/countdown-timer
ionic generate service core/services/storage

# Build and run
ionic build
ionic capacitor run android
ionic capacitor run ios
```

## Key Implementation Features

### 1. **Modular Architecture**

- Feature-based modules for scalability
- Shared components and services
- Lazy-loaded routes for performance

### 2. **State Management**

- BehaviorSubjects for reactive data flow
- Local storage persistence
- Service-based state management

### 3. **Timer Functionality**

- Real-time countdown with RxJS intervals
- Pause/resume capability
- Manual sync for level and time
- Visual and audio warnings

### 4. **Responsive Design**

- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly controls

### 5. **Data Persistence**

- Local storage for offline capability
- Export/import functionality
- Tournament history tracking

## Sync Modal Component (`src/app/shared/components/sync-modal/sync-modal.component.ts`)

```typescript
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tournament } from "../../models";

@Component({
  selector: "app-sync-modal",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Sync Tournament</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form [formGroup]="syncForm" (ngSubmit)="syncTournament()">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Current Level</ion-label>
            <ion-select formControlName="level" interface="popover">
              <ion-select-option *ngFor="let level of tournament.blindStructure.levels; let i = index" [value]="i">
                Level {{ i + 1 }}: {{ level.smallBlind }}/{{ level.bigBlind }}
                <span *ngIf="level.isBreak"> (Break)</span>
              </ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Minutes Remaining</ion-label>
            <ion-input type="number" formControlName="minutes" min="0" max="59"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Seconds Remaining</ion-label>
            <ion-input type="number" formControlName="seconds" min="0" max="59"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Pause Timer After Sync</ion-label>
            <ion-toggle formControlName="pauseAfterSync"></ion-toggle>
          </ion-item>
        </ion-list>

        <div class="sync-actions">
          <ion-button expand="block" type="submit" [disabled]="!syncForm.valid">
            <ion-icon name="sync" slot="start"></ion-icon>
            Sync Tournament
          </ion-button>
        </div>
      </form>
    </ion-content>
  `,
  styleUrls: ["./sync-modal.component.scss"],
})
export class SyncModalComponent implements OnInit {
  @Input() tournament!: Tournament;
  @Input() currentLevel: number = 0;
  @Input() remainingTime: number = 0;

  syncForm!: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.syncForm = this.formBuilder.group({
      level: [this.currentLevel, [Validators.required, Validators.min(0)]],
      minutes: [Math.floor(this.remainingTime / 60), [Validators.required, Validators.min(0), Validators.max(59)]],
      seconds: [this.remainingTime % 60, [Validators.required, Validators.min(0), Validators.max(59)]],
      pauseAfterSync: [false],
    });
  }

  syncTournament() {
    if (this.syncForm.valid) {
      const formValue = this.syncForm.value;
      const totalSeconds = formValue.minutes * 60 + formValue.seconds;

      this.modalController.dismiss(
        {
          level: formValue.level,
          time: totalSeconds,
          pauseAfterSync: formValue.pauseAfterSync,
        },
        "sync"
      );
    }
  }

  dismiss() {
    this.modalController.dismiss(null, "cancel");
  }
}
```

## Statistics Service (`src/app/features/statistics/services/statistics.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Tournament } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

export interface TournamentStats {
  totalTournaments: number;
  completedTournaments: number;
  averageDuration: number;
  mostUsedBlindStructure: string;
  longestTournament: Tournament | null;
  recentActivity: Tournament[];
}

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private storageService: StorageService) {}

  async getTournamentStats(): Promise<TournamentStats> {
    const tournaments: Tournament[] = (await this.storageService.get("tournaments")) || [];
    const completed = tournaments.filter((t) => t.isCompleted);

    return {
      totalTournaments: tournaments.length,
      completedTournaments: completed.length,
      averageDuration: this.calculateAverageDuration(completed),
      mostUsedBlindStructure: this.getMostUsedBlindStructure(tournaments),
      longestTournament: this.getLongestTournament(completed),
      recentActivity: tournaments.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5),
    };
  }

  private calculateAverageDuration(tournaments: Tournament[]): number {
    if (tournaments.length === 0) return 0;

    const totalDuration = tournaments.reduce((sum, tournament) => {
      const duration = new Date(tournament.updatedAt).getTime() - new Date(tournament.startTime).getTime();
      return sum + duration;
    }, 0);

    return totalDuration / tournaments.length / (1000 * 60); // Convert to minutes
  }

  private getMostUsedBlindStructure(tournaments: Tournament[]): string {
    const structureCount = tournaments.reduce((acc, tournament) => {
      const structureName = tournament.blindStructure.name;
      acc[structureName] = (acc[structureName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(structureCount).reduce((a, b) => (structureCount[a] > structureCount[b] ? a : b)) || "None";
  }

  private getLongestTournament(tournaments: Tournament[]): Tournament | null {
    if (tournaments.length === 0) return null;

    return tournaments.reduce((longest, current) => {
      const currentDuration = new Date(current.updatedAt).getTime() - new Date(current.startTime).getTime();
      const longestDuration = new Date(longest.updatedAt).getTime() - new Date(longest.startTime).getTime();
      return currentDuration > longestDuration ? current : longest;
    });
  }
}
```

## Tournament Create Page (`src/app/features/tournament/pages/tournament-create/tournament-create.page.html`)

```html
<ion-content>
  <div class="create-tournament-container">
    <form [formGroup]="tournamentForm" (ngSubmit)="createTournament()">
      <!-- Basic Information -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Tournament Details</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Tournament Name *</ion-label>
            <ion-input formControlName="name" placeholder="Enter tournament name"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Blind Structure *</ion-label>
            <ion-select formControlName="blindStructure" interface="popover">
              <ion-select-option *ngFor="let structure of blindStructures" [value]="structure"> {{ structure.name }} </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <!-- Tournament Settings -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Tournament Settings</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Level Duration (minutes) *</ion-label>
            <ion-input type="number" formControlName="levelDuration" min="1" max="120"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Break Frequency (levels)</ion-label>
            <ion-input type="number" formControlName="breakFrequency" min="1" max="10"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Break Duration (minutes)</ion-label>
            <ion-input type="number" formControlName="breakDuration" min="5" max="30"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Sound Notifications</ion-label>
            <ion-toggle formControlName="soundEnabled"></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Auto Advance Levels</ion-label>
            <ion-toggle formControlName="autoAdvance"></ion-toggle>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <!-- Preview -->
      <ion-card *ngIf="selectedBlindStructure">
        <ion-card-header>
          <ion-card-title>Structure Preview</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <div class="levels-preview">
            <div *ngFor="let level of selectedBlindStructure.levels.slice(0, 5); let i = index" class="level-preview">
              <span class="level-number">{{ i + 1 }}.</span>
              <span *ngIf="!level.isBreak" class="blinds">
                {{ level.smallBlind }}/{{ level.bigBlind }}
                <small *ngIf="level.ante"> ({{ level.ante }})</small>
              </span>
              <span *ngIf="level.isBreak" class="break">{{ level.breakName || 'Break' }}</span>
            </div>
            <div *ngIf="selectedBlindStructure.levels.length > 5" class="more-levels">... and {{ selectedBlindStructure.levels.length - 5 }} more levels</div>
          </div>
        </ion-card-content>
      </ion-card>

      <!-- Actions -->
      <div class="form-actions">
        <ion-button expand="block" type="submit" [disabled]="!tournamentForm.valid">
          <ion-icon name="trophy" slot="start"></ion-icon>
          Create Tournament
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="cancel()"> Cancel </ion-button>
      </div>
    </form>
  </div>
</ion-content>
```

## Blind Level Card Component (`src/app/features/tournament/components/blind-level-card/blind-level-card.component.html`)

```html
<ion-card [class.current]="isCurrent" [class.completed]="isCompleted" [class.break]="level.isBreak">
  <ion-card-content>
    <div class="level-header">
      <span class="level-number">{{ level.levelNumber }}</span>
      <span class="level-duration">{{ level.duration }}min</span>
    </div>

    <div class="level-content" *ngIf="!level.isBreak">
      <div class="blinds-info">
        <div class="blind-amounts">
          <span class="small-blind">{{ level.smallBlind | currency:'USD':'symbol':'1.0-0' }}</span>
          <span class="separator">/</span>
          <span class="big-blind">{{ level.bigBlind | currency:'USD':'symbol':'1.0-0' }}</span>
        </div>
        <div class="ante-info" *ngIf="level.ante">Ante: {{ level.ante | currency:'USD':'symbol':'1.0-0' }}</div>
      </div>
    </div>

    <div class="break-content" *ngIf="level.isBreak">
      <ion-icon name="cafe-outline" class="break-icon"></ion-icon>
      <span class="break-text">{{ level.breakName || 'Break' }}</span>
    </div>

    <div class="level-indicator" *ngIf="isCurrent">
      <ion-badge color="primary">Current</ion-badge>
    </div>
  </ion-card-content>
</ion-card>
```

## App Module Configuration (`src/app/app.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage-angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Core Module
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "ios", // Consistent UI across platforms
      rippleEffect: true,
      animated: true,
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Tab Layout Routing (`src/app/layout/components/tab-layout/tab-layout-routing.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabLayoutComponent } from "./tab-layout.component";

const routes: Routes = [
  {
    path: "",
    component: TabLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import("../../../features/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "tournaments",
        loadChildren: () => import("../../../features/tournament/tournament.module").then((m) => m.TournamentModule),
      },
      {
        path: "timer",
        redirectTo: "tournaments/timer",
      },
      {
        path: "statistics",
        loadChildren: () => import("../../../features/statistics/statistics.module").then((m) => m.StatisticsModule),
      },
      {
        path: "settings",
        loadChildren: () => import("../../../features/settings/settings.module").then((m) => m.SettingsModule),
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLayoutRoutingModule {}
```

## Advanced Timer Features

### Timer Service with Notifications (`src/app/features/tournament/services/timer.service.ts` - Extended)

```typescript
// ... (previous timer service code) ...

export class TimerService {
  // ... (previous properties) ...

  private notificationService?: any; // Add notification service injection

  // Enhanced timer with notifications and persistence
  startTimer(tournament: Tournament): void {
    this.stopTimer();

    const levelDuration = tournament.settings.levelDuration * 60;
    this.remainingTimeSubject.next(levelDuration);
    this.currentLevelSubject.next(tournament.currentLevel);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (!this.isPausedSubject.value) {
        const currentTime = this.remainingTimeSubject.value;

        // Check for notifications
        this.checkNotifications(currentTime, tournament.settings);

        if (currentTime > 0) {
          this.remainingTimeSubject.next(currentTime - 1);
          this.saveTimerState(tournament.id, currentTime - 1);
        } else {
          this.advanceLevel(tournament);
        }
      }
    });
  }

  private checkNotifications(remainingTime: number, settings: any): void {
    // 1 minute warning
    if (remainingTime === 60 && settings.soundEnabled) {
      this.playWarningSound();
    }

    // 30 second warning
    if (remainingTime === 30 && settings.soundEnabled) {
      this.playWarningSound();
    }

    // 10 second countdown
    if (remainingTime <= 10 && remainingTime > 0 && settings.soundEnabled) {
      this.playTickSound();
    }
  }

  private playWarningSound(): void {
    // Implementation for playing warning sound
    const audio = new Audio("assets/sounds/timer-warning.mp3");
    audio.play().catch((e) => console.log("Audio play failed:", e));
  }

  private playTickSound(): void {
    // Implementation for playing tick sound
    const audio = new Audio("assets/sounds/timer-tick.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio play failed:", e));
  }

  private async saveTimerState(tournamentId: string, remainingTime: number): Promise<void> {
    const timerState = {
      tournamentId,
      currentLevel: this.currentLevelSubject.value,
      remainingTime,
      lastUpdate: Date.now(),
    };
    // Save to storage for persistence across app restarts
  }

  async restoreTimerState(tournamentId: string): Promise<void> {
    // Implementation to restore timer state from storage
  }
}
```

## Responsive Layout Styles (`src/theme/responsive.scss`)

```scss
// Tablet and Desktop optimizations
@media (min-width: 768px) {
  .tournament-timer {
    .timer-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px;
    }

    .timer-controls {
      justify-content: space-between;
      max-width: 500px;
      margin: 32px auto;
    }
  }

  .tournaments-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  }

  .settings-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    .quick-actions,
    .active-tournament-card {
      display: inline-block;
      width: calc(50% - 10px);
      margin: 0 5px;
    }
  }
}

// Mobile optimizations
@media (max-width: 767px) {
  .tournament-timer {
    .timer-display .countdown-display {
      font-size: 4rem;
    }

    .timer-controls {
      flex-direction: column;

      ion-button {
        margin: 4px 0;
      }
    }
  }
}
```

## Capacitor Configuration (`capacitor.config.ts`)

```typescript
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.pokertournament.tracker",
  appName: "Poker Tournament Tracker",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    StatusBar: {
      style: "Dark",
      backgroundColor: "#1a472a",
    },
    Keyboard: {
      resize: "body",
      style: "dark",
    },
    App: {
      windowCloseConfirmation: false,
    },
  },
};

export default config;
```

## Environment Configuration

### Development Environment (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  version: "1.0.0",
  api: {
    baseUrl: "http://localhost:3000/api",
    timeout: 10000,
  },
  features: {
    enableAdvancedStats: true,
    enableCloudSync: false,
    enableDebugMode: true,
  },
  storage: {
    storagePrefix: "poker_tournament_",
    enableEncryption: false,
  },
};
```

### Production Environment (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  version: "1.0.0",
  api: {
    baseUrl: "https://api.pokertournamenttracker.com",
    timeout: 15000,
  },
  features: {
    enableAdvancedStats: true,
    enableCloudSync: true,
    enableDebugMode: false,
  },
  storage: {
    storagePrefix: "poker_tournament_",
    enableEncryption: true,
  },
};
```

## Default Data Files

### Default Blind Structures (`src/assets/data/default-blind-structures.json`)

```json
[
  {
    "id": "standard",
    "name": "Standard Tournament",
    "description": "Classic tournament structure with gradual blind increases",
    "isDefault": true,
    "levels": [
      { "levelNumber": 1, "smallBlind": 25, "bigBlind": 50, "duration": 15, "isBreak": false },
      { "levelNumber": 2, "smallBlind": 50, "bigBlind": 100, "duration": 15, "isBreak": false },
      { "levelNumber": 3, "smallBlind": 75, "bigBlind": 150, "duration": 15, "isBreak": false },
      { "levelNumber": 4, "smallBlind": 100, "bigBlind": 200, "duration": 15, "isBreak": false },
      { "levelNumber": 5, "smallBlind": 0, "bigBlind": 0, "duration": 15, "isBreak": true, "breakName": "15 Minute Break" },
      { "levelNumber": 6, "smallBlind": 150, "bigBlind": 300, "duration": 20, "isBreak": false },
      { "levelNumber": 7, "smallBlind": 200, "bigBlind": 400, "duration": 20, "isBreak": false },
      { "levelNumber": 8, "smallBlind": 300, "bigBlind": 600, "duration": 20, "isBreak": false },
      { "levelNumber": 9, "smallBlind": 400, "bigBlind": 800, "duration": 20, "isBreak": false },
      { "levelNumber": 10, "smallBlind": 500, "bigBlind": 1000, "ante": 100, "duration": 20, "isBreak": false }
    ]
  },
  {
    "id": "turbo",
    "name": "Turbo Tournament",
    "description": "Fast-paced tournament with shorter levels",
    "isDefault": false,
    "levels": [
      { "levelNumber": 1, "smallBlind": 50, "bigBlind": 100, "duration": 8, "isBreak": false },
      { "levelNumber": 2, "smallBlind": 75, "bigBlind": 150, "duration": 8, "isBreak": false },
      { "levelNumber": 3, "smallBlind": 100, "bigBlind": 200, "duration": 8, "isBreak": false },
      { "levelNumber": 4, "smallBlind": 150, "bigBlind": 300, "duration": 8, "isBreak": false },
      { "levelNumber": 5, "smallBlind": 200, "bigBlind": 400, "duration": 8, "isBreak": false }
    ]
  }
]
```

## Build and Deployment Scripts

### Additional Package.json Scripts

```json
{
  "scripts": {
    "build:prod": "ionic build --prod",
    "build:android": "ionic capacitor build android",
    "build:ios": "ionic capacitor build ios",
    "deploy:android": "ionic capacitor run android --device",
    "deploy:ios": "ionic capacitor run ios --device",
    "test:unit": "ng test",
    "test:e2e": "ng e2e",
    "lint:fix": "ng lint --fix",
    "analyze": "npx webpack-bundle-analyzer dist/main.js"
  }
}
```

## Testing Configuration

### Karma Configuration (`karma.conf.js`)

```javascript
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [require("karma-jasmine"), require("karma-chrome-headless"), require("karma-jasmine-html-reporter"), require("karma-coverage"), require("@angular-devkit/build-angular/plugins/karma")],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/poker-tournament-tracker"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }, { type: "lcov" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
```

## Performance Optimizations

### Lazy Loading Strategy (`src/app/app-routing.module.ts` - Enhanced)

```typescript
const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "tournament-timer/:id",
    loadChildren: () => import("./features/tournament/tournament.module").then((m) => m.TournamentModule),
    data: { preload: true },
  },
  {
    path: "blind-structure-editor",
    loadChildren: () => import("./features/settings/settings.module").then((m) => m.SettingsModule),
  },
];
```

## Additional Utilities

### Time Format Pipe (`src/app/shared/pipes/time-format.pipe.ts`)

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeFormat",
})
export class TimeFormatPipe implements PipeTransform {
  transform(seconds: number, format: "full" | "short" = "full"): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (format === "short") {
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      }
      return `${minutes}:${secs.toString().padStart(2, "0")}`;
    }

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  }
}
```

### Platform Service (`src/app/core/services/platform.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { StatusBar } from "@capacitor/status-bar";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  constructor(private platform: Platform) {}

  async initialize(): Promise<void> {
    await this.platform.ready();

    if (this.platform.is("capacitor")) {
      await this.setupStatusBar();
    }
  }

  private async setupStatusBar(): Promise<void> {
    await StatusBar.setStyle({ style: "DARK" });
    await StatusBar.setBackgroundColor({ color: "#1a472a" });
  }

  async triggerHaptic(): Promise<void> {
    if (this.platform.is("capacitor")) {
      await Haptics.impact({ style: ImpactStyle.Medium });
    }
  }

  isNative(): boolean {
    return this.platform.is("capacitor");
  }

  isMobile(): boolean {
    return this.platform.is("mobile");
  }
}
```

This structure provides a solid foundation for a poker tournament tracking app with room for future expansion and maintenance. The modular architecture ensures scalability, proper separation of concerns, and maintainable code for a medium-to-large scale application.

# Poker Tournament Tracker - Ionic Angular App

## Project Structure

```
poker-tournament-tracker/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── index.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── http-error.interceptor.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── storage.service.ts
│   │   │   │   ├── platform.service.ts
│   │   │   │   └── index.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   ├── header.component.scss
│   │   │   │   │   └── header.component.spec.ts
│   │   │   │   ├── countdown-timer/
│   │   │   │   │   ├── countdown-timer.component.ts
│   │   │   │   │   ├── countdown-timer.component.html
│   │   │   │   │   ├── countdown-timer.component.scss
│   │   │   │   │   └── countdown-timer.component.spec.ts
│   │   │   │   ├── level-display/
│   │   │   │   │   ├── level-display.component.ts
│   │   │   │   │   ├── level-display.component.html
│   │   │   │   │   ├── level-display.component.scss
│   │   │   │   │   └── level-display.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   ├── pipes/
│   │   │   │   ├── time-format.pipe.ts
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── index.ts
│   │   │   ├── directives/
│   │   │   │   └── index.ts
│   │   │   ├── models/
│   │   │   │   ├── tournament.model.ts
│   │   │   │   ├── level.model.ts
│   │   │   │   ├── blind-structure.model.ts
│   │   │   │   └── index.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── tournament/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── tournament-list/
│   │   │   │   │   │   ├── tournament-list.page.ts
│   │   │   │   │   │   ├── tournament-list.page.html
│   │   │   │   │   │   ├── tournament-list.page.scss
│   │   │   │   │   │   └── tournament-list.page.spec.ts
│   │   │   │   │   ├── tournament-detail/
│   │   │   │   │   │   ├── tournament-detail.page.ts
│   │   │   │   │   │   ├── tournament-detail.page.html
│   │   │   │   │   │   ├── tournament-detail.page.scss
│   │   │   │   │   │   └── tournament-detail.page.spec.ts
│   │   │   │   │   ├── tournament-create/
│   │   │   │   │   │   ├── tournament-create.page.ts
│   │   │   │   │   │   ├── tournament-create.page.html
│   │   │   │   │   │   ├── tournament-create.page.scss
│   │   │   │   │   │   └── tournament-create.page.spec.ts
│   │   │   │   │   └── tournament-timer/
│   │   │   │   │       ├── tournament-timer.page.ts
│   │   │   │   │       ├── tournament-timer.page.html
│   │   │   │   │       ├── tournament-timer.page.scss
│   │   │   │   │       └── tournament-timer.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── tournament.service.ts
│   │   │   │   │   ├── timer.service.ts
│   │   │   │   │   ├── blind-structure.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── blind-level-card/
│   │   │   │   │   │   ├── blind-level-card.component.ts
│   │   │   │   │   │   ├── blind-level-card.component.html
│   │   │   │   │   │   ├── blind-level-card.component.scss
│   │   │   │   │   │   └── blind-level-card.component.spec.ts
│   │   │   │   │   ├── tournament-controls/
│   │   │   │   │   │   ├── tournament-controls.component.ts
│   │   │   │   │   │   ├── tournament-controls.component.html
│   │   │   │   │   │   ├── tournament-controls.component.scss
│   │   │   │   │   │   └── tournament-controls.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── tournament-routing.module.ts
│   │   │   │   └── tournament.module.ts
│   │   │   ├── settings/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── settings.page.ts
│   │   │   │   │   │   ├── settings.page.html
│   │   │   │   │   │   ├── settings.page.scss
│   │   │   │   │   │   └── settings.page.spec.ts
│   │   │   │   │   ├── blind-structure-editor/
│   │   │   │   │   │   ├── blind-structure-editor.page.ts
│   │   │   │   │   │   ├── blind-structure-editor.page.html
│   │   │   │   │   │   ├── blind-structure-editor.page.scss
│   │   │   │   │   │   └── blind-structure-editor.page.spec.ts
│   │   │   │   │   └── preferences/
│   │   │   │   │       ├── preferences.page.ts
│   │   │   │   │       ├── preferences.page.html
│   │   │   │   │       ├── preferences.page.scss
│   │   │   │   │       └── preferences.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── settings.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── settings-item/
│   │   │   │   │   │   ├── settings-item.component.ts
│   │   │   │   │   │   ├── settings-item.component.html
│   │   │   │   │   │   ├── settings-item.component.scss
│   │   │   │   │   │   └── settings-item.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── settings-routing.module.ts
│   │   │   │   └── settings.module.ts
│   │   │   ├── statistics/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── statistics/
│   │   │   │   │   │   ├── statistics.page.ts
│   │   │   │   │   │   ├── statistics.page.html
│   │   │   │   │   │   ├── statistics.page.scss
│   │   │   │   │   │   └── statistics.page.spec.ts
│   │   │   │   │   └── tournament-history/
│   │   │   │   │       ├── tournament-history.page.ts
│   │   │   │   │       ├── tournament-history.page.html
│   │   │   │   │       ├── tournament-history.page.scss
│   │   │   │   │       └── tournament-history.page.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── statistics.service.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── stats-chart/
│   │   │   │   │   │   ├── stats-chart.component.ts
│   │   │   │   │   │   ├── stats-chart.component.html
│   │   │   │   │   │   ├── stats-chart.component.scss
│   │   │   │   │   │   └── stats-chart.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── statistics-routing.module.ts
│   │   │   │   └── statistics.module.ts
│   │   │   └── home/
│   │   │       ├── pages/
│   │   │       │   └── home/
│   │   │       │       ├── home.page.ts
│   │   │       │       ├── home.page.html
│   │   │       │       ├── home.page.scss
│   │   │       │       └── home.page.spec.ts
│   │   │       ├── home-routing.module.ts
│   │   │       └── home.module.ts
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── tab-layout/
│   │   │   │   │   ├── tab-layout.component.ts
│   │   │   │   │   ├── tab-layout.component.html
│   │   │   │   │   ├── tab-layout.component.scss
│   │   │   │   │   └── tab-layout.component.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── layout.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── icon/
│   │   │   └── favicon.png
│   │   ├── images/
│   │   │   ├── poker-chips.svg
│   │   │   └── tournament-bg.jpg
│   │   ├── sounds/
│   │   │   ├── level-up.mp3
│   │   │   └── timer-warning.mp3
│   │   ├── data/
│   │   │   ├── default-blind-structures.json
│   │   │   └── tournament-templates.json
│   │   └── i18n/
│   │       ├── en.json
│   │       └── es.json
│   ├── theme/
│   │   ├── variables.scss
│   │   ├── poker-theme.scss
│   │   └── responsive.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── test.ts
├── angular.json
├── ionic.config.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── karma.conf.js
├── capacitor.config.ts
├── .gitignore
└── README.md
```

## Key Models and Interfaces

### Tournament Model (`src/app/shared/models/tournament.model.ts`)

```typescript
export interface Tournament {
  id: string;
  name: string;
  startTime: Date;
  currentLevel: number;
  isPaused: boolean;
  isCompleted: boolean;
  blindStructure: BlindStructure;
  settings: TournamentSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface TournamentSettings {
  levelDuration: number; // in minutes
  breakFrequency: number; // levels between breaks
  breakDuration: number; // in minutes
  soundEnabled: boolean;
  autoAdvance: boolean;
}
```

### Level Model (`src/app/shared/models/level.model.ts`)

```typescript
export interface Level {
  levelNumber: number;
  smallBlind: number;
  bigBlind: number;
  ante?: number;
  duration: number; // in minutes
  isBreak: boolean;
  breakName?: string;
}

export interface BlindStructure {
  id: string;
  name: string;
  levels: Level[];
  description?: string;
  isDefault: boolean;
}
```

## Main App Routing (`src/app/app-routing.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "tournament-timer/:id",
    loadChildren: () => import("./features/tournament/tournament.module").then((m) => m.TournamentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Tab Layout Component (`src/app/layout/components/tab-layout/tab-layout.component.html`)

```html
<ion-header>
  <app-header></app-header>
</ion-header>

<ion-content>
  <ion-router-outlet></ion-router-outlet>
</ion-content>

<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/tabs/home">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tournaments" href="/tabs/tournaments">
      <ion-icon name="trophy"></ion-icon>
      <ion-label>Tournaments</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="timer" href="/tabs/timer">
      <ion-icon name="timer"></ion-icon>
      <ion-label>Timer</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="statistics" href="/tabs/statistics">
      <ion-icon name="stats-chart"></ion-icon>
      <ion-label>Statistics</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="settings" href="/tabs/settings">
      <ion-icon name="settings"></ion-icon>
      <ion-label>Settings</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

## Header Component (`src/app/shared/components/header/header.component.html`)

```html
<ion-toolbar color="primary">
  <ion-title>{{ title }}</ion-title>

  <ion-buttons slot="end">
    <ion-button (click)="openSettings()" *ngIf="showSettings">
      <ion-icon name="settings-outline"></ion-icon>
    </ion-button>

    <ion-button (click)="syncTournament()" *ngIf="showSync">
      <ion-icon name="sync-outline"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>
```

## Tournament Timer Service (`src/app/features/tournament/services/timer.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Subscription } from "rxjs";
import { Tournament, Level } from "../../../shared/models";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  private timerSubscription?: Subscription;
  private remainingTimeSubject = new BehaviorSubject<number>(0);
  private currentLevelSubject = new BehaviorSubject<number>(0);
  private isPausedSubject = new BehaviorSubject<boolean>(false);

  remainingTime$ = this.remainingTimeSubject.asObservable();
  currentLevel$ = this.currentLevelSubject.asObservable();
  isPaused$ = this.isPausedSubject.asObservable();

  startTimer(tournament: Tournament): void {
    this.stopTimer();

    const levelDuration = tournament.settings.levelDuration * 60; // Convert to seconds
    this.remainingTimeSubject.next(levelDuration);
    this.currentLevelSubject.next(tournament.currentLevel);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (!this.isPausedSubject.value) {
        const currentTime = this.remainingTimeSubject.value;
        if (currentTime > 0) {
          this.remainingTimeSubject.next(currentTime - 1);
        } else {
          this.advanceLevel(tournament);
        }
      }
    });
  }

  pauseTimer(): void {
    this.isPausedSubject.next(true);
  }

  resumeTimer(): void {
    this.isPausedSubject.next(false);
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private advanceLevel(tournament: Tournament): void {
    const nextLevel = tournament.currentLevel + 1;
    if (nextLevel < tournament.blindStructure.levels.length) {
      this.currentLevelSubject.next(nextLevel);
      const levelDuration = tournament.settings.levelDuration * 60;
      this.remainingTimeSubject.next(levelDuration);
    } else {
      this.stopTimer();
    }
  }

  syncLevel(level: number, time: number): void {
    this.currentLevelSubject.next(level);
    this.remainingTimeSubject.next(time);
  }

  getLevelsRemaining(tournament: Tournament): number {
    return tournament.blindStructure.levels.length - tournament.currentLevel - 1;
  }
}
```

## Tournament Timer Page (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.html`)

```html
<ion-content class="tournament-timer">
  <div class="timer-container">
    <!-- Current Level Display -->
    <div class="level-info">
      <h2>Level {{ currentLevel + 1 }}</h2>
      <div class="blinds">
        <span class="small-blind">{{ currentBlindLevel?.smallBlind | currency:'USD':'symbol':'1.0-0' }}</span>
        /
        <span class="big-blind">{{ currentBlindLevel?.bigBlind | currency:'USD':'symbol':'1.0-0' }}</span>
      </div>
      <div class="ante" *ngIf="currentBlindLevel?.ante">Ante: {{ currentBlindLevel?.ante | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>

    <!-- Timer Display -->
    <div class="timer-display">
      <app-countdown-timer [remainingTime]="remainingTime" [isPaused]="isPaused"> </app-countdown-timer>
    </div>

    <!-- Progress Info -->
    <div class="progress-info">
      <p>{{ levelsRemaining }} levels remaining</p>
      <ion-progress-bar [value]="getProgress()" color="secondary"> </ion-progress-bar>
    </div>

    <!-- Controls -->
    <div class="timer-controls">
      <ion-button (click)="pauseResumeTimer()" [color]="isPaused ? 'success' : 'warning'" size="large">
        <ion-icon [name]="isPaused ? 'play' : 'pause'"></ion-icon>
        {{ isPaused ? 'Resume' : 'Pause' }}
      </ion-button>

      <ion-button (click)="skipLevel()" color="tertiary" size="large">
        <ion-icon name="play-skip-forward"></ion-icon>
        Skip Level
      </ion-button>

      <ion-button (click)="openSyncModal()" fill="outline" size="large">
        <ion-icon name="sync"></ion-icon>
        Sync
      </ion-button>
    </div>

    <!-- Next Level Preview -->
    <div class="next-level" *ngIf="nextLevel">
      <h3>Next Level</h3>
      <div class="next-blinds">{{ nextLevel.smallBlind | currency:'USD':'symbol':'1.0-0' }} / {{ nextLevel.bigBlind | currency:'USD':'symbol':'1.0-0' }}</div>
    </div>
  </div>
</ion-content>
```

## Countdown Timer Component (`src/app/shared/components/countdown-timer/countdown-timer.component.ts`)

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  template: `
    <div class="countdown-display" [class.warning]="isWarning" [class.paused]="isPaused">
      <span class="minutes">{{ formatTime(remainingTime).minutes }}</span>
      <span class="separator">:</span>
      <span class="seconds">{{ formatTime(remainingTime).seconds }}</span>
    </div>
  `,
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent {
  @Input() remainingTime: number = 0;
  @Input() isPaused: boolean = false;

  get isWarning(): boolean {
    return this.remainingTime <= 60; // Warning when less than 1 minute
  }

  formatTime(seconds: number): { minutes: string; seconds: string } {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  }
}
```

## Tournament Service (`src/app/features/tournament/services/tournament.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tournament, BlindStructure } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class TournamentService {
  private tournamentsSubject = new BehaviorSubject<Tournament[]>([]);
  private activeTournamentSubject = new BehaviorSubject<Tournament | null>(null);

  tournaments$ = this.tournamentsSubject.asObservable();
  activeTournament$ = this.activeTournamentSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadTournaments();
  }

  async createTournament(tournament: Partial<Tournament>): Promise<Tournament> {
    const newTournament: Tournament = {
      id: this.generateId(),
      name: tournament.name || "New Tournament",
      startTime: new Date(),
      currentLevel: 0,
      isPaused: false,
      isCompleted: false,
      blindStructure: tournament.blindStructure!,
      settings: tournament.settings!,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const tournaments = this.tournamentsSubject.value;
    tournaments.push(newTournament);
    this.tournamentsSubject.next(tournaments);
    await this.saveTournaments();

    return newTournament;
  }

  async updateTournament(tournament: Tournament): Promise<void> {
    tournament.updatedAt = new Date();
    const tournaments = this.tournamentsSubject.value;
    const index = tournaments.findIndex((t) => t.id === tournament.id);

    if (index !== -1) {
      tournaments[index] = tournament;
      this.tournamentsSubject.next(tournaments);
      await this.saveTournaments();
    }
  }

  setActiveTournament(tournament: Tournament): void {
    this.activeTournamentSubject.next(tournament);
  }

  syncTournament(level: number, remainingTime: number): void {
    const activeTournament = this.activeTournamentSubject.value;
    if (activeTournament) {
      activeTournament.currentLevel = level;
      this.updateTournament(activeTournament);
    }
  }

  private async loadTournaments(): Promise<void> {
    const tournaments = (await this.storageService.get("tournaments")) || [];
    this.tournamentsSubject.next(tournaments);
  }

  private async saveTournaments(): Promise<void> {
    await this.storageService.set("tournaments", this.tournamentsSubject.value);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
```

## Package.json Dependencies

```json
{
  "name": "poker-tournament-tracker",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "ionic:build": "ionic build",
    "ionic:serve": "ionic serve"
  },
  "dependencies": {
    "@angular/animations": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/core": "^16.0.0",
    "@angular/forms": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "@angular/router": "^16.0.0",
    "@capacitor/android": "^5.0.0",
    "@capacitor/app": "^5.0.0",
    "@capacitor/core": "^5.0.0",
    "@capacitor/haptics": "^5.0.0",
    "@capacitor/ios": "^5.0.0",
    "@capacitor/keyboard": "^5.0.0",
    "@capacitor/status-bar": "^5.0.0",
    "@ionic/angular": "^7.0.0",
    "@ionic/storage-angular": "^4.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.0.0",
    "@angular-eslint/builder": "^16.0.0",
    "@angular-eslint/eslint-plugin": "^16.0.0",
    "@angular-eslint/eslint-plugin-template": "^16.0.0",
    "@angular-eslint/schematics": "^16.0.0",
    "@angular-eslint/template-parser": "^16.0.0",
    "@angular/cli": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/compiler-cli": "^16.0.0",
    "@angular/language-service": "^16.0.0",
    "@capacitor/cli": "^5.0.0",
    "@ionic/angular-toolkit": "^9.0.0",
    "@types/jasmine": "~4.3.0",
    "@types/node": "^18.15.0",
    "@typescript-eslint/eslint-plugin": "5.59.0",
    "@typescript-eslint/parser": "5.59.0",
    "eslint": "^8.57.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "46.2.6",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "~4.6.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~6.4.0",
    "karma-chrome-headless": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.0.2"
  }
}
```

## Key Features Implementation

### 1. **Level and Blind Management**

- Configurable blind structures stored in JSON
- Support for antes and break levels
- Visual display of current and next level information

### 2. **Timer Functionality**

- Real-time countdown with pause/resume
- Visual warnings when time is running low
- Automatic level advancement
- Manual sync capability for level and time

### 3. **Tab Navigation**

- **Home**: Quick access and active tournament overview
- **Tournaments**: List and manage tournaments
- **Timer**: Main tournament timer interface
- **Statistics**: Tournament history and analytics
- **Settings**: App configuration and blind structure management

### 4. **Header Integration**

- Context-aware settings button
- Sync functionality
- Dynamic title updates

## Core Services Implementation

### Storage Service (`src/app/core/services/storage.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async set(key: string, value: any): Promise<any> {
    return this._storage?.set(key, value);
  }

  async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  async remove(key: string): Promise<any> {
    return this._storage?.remove(key);
  }

  async clear(): Promise<void> {
    return this._storage?.clear();
  }

  async keys(): Promise<string[]> {
    return this._storage?.keys() || [];
  }
}
```

### Blind Structure Service (`src/app/features/tournament/services/blind-structure.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BlindStructure, Level } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class BlindStructureService {
  private blindStructuresSubject = new BehaviorSubject<BlindStructure[]>([]);

  blindStructures$ = this.blindStructuresSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadBlindStructures();
  }

  async createBlindStructure(structure: Partial<BlindStructure>): Promise<BlindStructure> {
    const newStructure: BlindStructure = {
      id: this.generateId(),
      name: structure.name || "Custom Structure",
      levels: structure.levels || this.getDefaultLevels(),
      description: structure.description,
      isDefault: false,
    };

    const structures = this.blindStructuresSubject.value;
    structures.push(newStructure);
    this.blindStructuresSubject.next(structures);
    await this.saveBlindStructures();

    return newStructure;
  }

  async updateBlindStructure(structure: BlindStructure): Promise<void> {
    const structures = this.blindStructuresSubject.value;
    const index = structures.findIndex((s) => s.id === structure.id);

    if (index !== -1) {
      structures[index] = structure;
      this.blindStructuresSubject.next(structures);
      await this.saveBlindStructures();
    }
  }

  async deleteBlindStructure(id: string): Promise<void> {
    const structures = this.blindStructuresSubject.value.filter((s) => s.id !== id);
    this.blindStructuresSubject.next(structures);
    await this.saveBlindStructures();
  }

  getDefaultLevels(): Level[] {
    return [
      { levelNumber: 1, smallBlind: 25, bigBlind: 50, duration: 15, isBreak: false },
      { levelNumber: 2, smallBlind: 50, bigBlind: 100, duration: 15, isBreak: false },
      { levelNumber: 3, smallBlind: 75, bigBlind: 150, duration: 15, isBreak: false },
      { levelNumber: 4, smallBlind: 100, bigBlind: 200, duration: 15, isBreak: false },
      { levelNumber: 5, smallBlind: 0, bigBlind: 0, duration: 15, isBreak: true, breakName: "15 Minute Break" },
      { levelNumber: 6, smallBlind: 150, bigBlind: 300, duration: 20, isBreak: false },
      { levelNumber: 7, smallBlind: 200, bigBlind: 400, duration: 20, isBreak: false },
      { levelNumber: 8, smallBlind: 300, bigBlind: 600, duration: 20, isBreak: false },
      { levelNumber: 9, smallBlind: 400, bigBlind: 800, duration: 20, isBreak: false },
      { levelNumber: 10, smallBlind: 500, bigBlind: 1000, ante: 100, duration: 20, isBreak: false },
    ];
  }

  private async loadBlindStructures(): Promise<void> {
    let structures = (await this.storageService.get("blindStructures")) || [];

    if (structures.length === 0) {
      structures = [this.createDefaultStructure()];
      await this.storageService.set("blindStructures", structures);
    }

    this.blindStructuresSubject.next(structures);
  }

  private async saveBlindStructures(): Promise<void> {
    await this.storageService.set("blindStructures", this.blindStructuresSubject.value);
  }

  private createDefaultStructure(): BlindStructure {
    return {
      id: "default",
      name: "Standard Tournament",
      levels: this.getDefaultLevels(),
      description: "Standard blind structure for poker tournaments",
      isDefault: true,
    };
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
```

## Main Pages Implementation

### Tournament List Page (`src/app/features/tournament/pages/tournament-list/tournament-list.page.html`)

```html
<ion-content>
  <div class="tournaments-container">
    <ion-card *ngFor="let tournament of tournaments" (click)="selectTournament(tournament)" [class.active]="tournament.id === activeTournament?.id">
      <ion-card-header>
        <ion-card-title>{{ tournament.name }}</ion-card-title>
        <ion-card-subtitle> {{ tournament.blindStructure.name }} • Level {{ tournament.currentLevel + 1 }}/{{ tournament.blindStructure.levels.length }} </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div class="tournament-info">
          <div class="status">
            <ion-badge [color]="getStatusColor(tournament)"> {{ getStatusText(tournament) }} </ion-badge>
          </div>

          <div class="created-date">Created: {{ tournament.createdAt | date:'short' }}</div>
        </div>
      </ion-card-content>

      <ion-row class="tournament-actions">
        <ion-col>
          <ion-button fill="outline" size="small" (click)="editTournament(tournament, $event)">
            <ion-icon name="create-outline"></ion-icon>
            Edit
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button fill="outline" size="small" color="danger" (click)="deleteTournament(tournament, $event)">
            <ion-icon name="trash-outline"></ion-icon>
            Delete
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-card>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button (click)="createNewTournament()">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</ion-content>
```

### Settings Page (`src/app/features/settings/pages/settings/settings.page.html`)

```html
<ion-content>
  <div class="settings-container">
    <!-- Tournament Settings -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Tournament Settings</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label>Default Level Duration</ion-label>
          <ion-select [(ngModel)]="settings.defaultLevelDuration" interface="popover">
            <ion-select-option value="10">10 minutes</ion-select-option>
            <ion-select-option value="15">15 minutes</ion-select-option>
            <ion-select-option value="20">20 minutes</ion-select-option>
            <ion-select-option value="30">30 minutes</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Break Frequency</ion-label>
          <ion-select [(ngModel)]="settings.breakFrequency" interface="popover">
            <ion-select-option value="3">Every 3 levels</ion-select-option>
            <ion-select-option value="4">Every 4 levels</ion-select-option>
            <ion-select-option value="5">Every 5 levels</ion-select-option>
            <ion-select-option value="6">Every 6 levels</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Sound Notifications</ion-label>
          <ion-toggle [(ngModel)]="settings.soundEnabled"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Auto Advance Levels</ion-label>
          <ion-toggle [(ngModel)]="settings.autoAdvance"></ion-toggle>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Blind Structures -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Blind Structures</ion-card-title>
        <ion-card-subtitle>Manage tournament blind structures</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <ion-button expand="block" fill="outline" (click)="manageBlindStructures()">
          <ion-icon name="list-outline" slot="start"></ion-icon>
          Manage Blind Structures
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="createBlindStructure()">
          <ion-icon name="add-outline" slot="start"></ion-icon>
          Create New Structure
        </ion-button>
      </ion-card-content>
    </ion-card>

    <!-- App Settings -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>App Settings</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label>Keep Screen On</ion-label>
          <ion-toggle [(ngModel)]="settings.keepScreenOn"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Dark Mode</ion-label>
          <ion-toggle [(ngModel)]="settings.darkMode" (ionChange)="toggleDarkMode($event)"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Vibration</ion-label>
          <ion-toggle [(ngModel)]="settings.vibrationEnabled"></ion-toggle>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Data Management -->
    <ion-card>
      <ion-card-header>
        <ion-card-title>Data Management</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-button expand="block" fill="outline" (click)="exportData()">
          <ion-icon name="download-outline" slot="start"></ion-icon>
          Export Tournament Data
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="importData()">
          <ion-icon name="cloud-upload-outline" slot="start"></ion-icon>
          Import Tournament Data
        </ion-button>

        <ion-button expand="block" color="danger" fill="outline" (click)="clearAllData()">
          <ion-icon name="trash-outline" slot="start"></ion-icon>
          Clear All Data
        </ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</ion-content>
```

### Home Page (`src/app/features/home/pages/home/home.page.html`)

```html
<ion-content>
  <div class="home-container">
    <!-- Active Tournament Card -->
    <ion-card *ngIf="activeTournament" class="active-tournament-card">
      <ion-card-header>
        <ion-card-title>{{ activeTournament.name }}</ion-card-title>
        <ion-card-subtitle>Active Tournament</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div class="tournament-status">
          <div class="current-level">
            <h3>Level {{ activeTournament.currentLevel + 1 }}</h3>
            <p>{{ getCurrentBlindText(activeTournament) }}</p>
          </div>

          <div class="time-remaining">
            <app-countdown-timer [remainingTime]="remainingTime" [isPaused]="isPaused"> </app-countdown-timer>
          </div>
        </div>

        <ion-button expand="block" (click)="openTournamentTimer()">
          <ion-icon name="timer-outline" slot="start"></ion-icon>
          Open Timer
        </ion-button>
      </ion-card-content>
    </ion-card>

    <!-- Quick Actions -->
    <ion-card class="quick-actions">
      <ion-card-header>
        <ion-card-title>Quick Actions</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-row>
          <ion-col size="6">
            <ion-button expand="block" fill="outline" (click)="createTournament()">
              <ion-icon name="add-circle-outline" slot="start"></ion-icon>
              New Tournament
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button expand="block" fill="outline" (click)="viewTournaments()">
              <ion-icon name="list-outline" slot="start"></ion-icon>
              View All
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card-content>
    </ion-card>

    <!-- Recent Tournaments -->
    <ion-card *ngIf="recentTournaments.length > 0">
      <ion-card-header>
        <ion-card-title>Recent Tournaments</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item *ngFor="let tournament of recentTournaments" button (click)="selectTournament(tournament)">
          <ion-label>
            <h3>{{ tournament.name }}</h3>
            <p>{{ tournament.createdAt | date:'short' }}</p>
          </ion-label>
          <ion-badge slot="end" [color]="getStatusColor(tournament)"> {{ getStatusText(tournament) }} </ion-badge>
        </ion-item>
      </ion-card-content>
    </ion-card>

    <!-- Getting Started (if no tournaments) -->
    <ion-card *ngIf="!activeTournament && recentTournaments.length === 0" class="getting-started">
      <ion-card-header>
        <ion-card-title>Welcome to Poker Tournament Tracker</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <p>Get started by creating your first tournament.</p>
        <ion-button expand="block" (click)="createTournament()">
          <ion-icon name="rocket-outline" slot="start"></ion-icon>
          Create First Tournament
        </ion-button>
      </ion-card-content>
    </ion-card>
  </div>
</ion-content>
```

## Tournament Timer Page Implementation (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.ts`)

```typescript
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, AlertController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Tournament, Level } from "../../../../shared/models";
import { TournamentService } from "../../services/tournament.service";
import { TimerService } from "../../services/timer.service";

@Component({
  selector: "app-tournament-timer",
  templateUrl: "./tournament-timer.page.html",
  styleUrls: ["./tournament-timer.page.scss"],
})
export class TournamentTimerPage implements OnInit, OnDestroy {
  tournament?: Tournament;
  currentLevel: number = 0;
  remainingTime: number = 0;
  isPaused: boolean = false;
  levelsRemaining: number = 0;

  currentBlindLevel?: Level;
  nextLevel?: Level;

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private tournamentService: TournamentService, private timerService: TimerService, private modalController: ModalController, private alertController: AlertController) {}

  ngOnInit() {
    this.loadTournament();
    this.subscribeToTimer();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.timerService.stopTimer();
  }

  private loadTournament() {
    const tournamentId = this.route.snapshot.paramMap.get("id");
    if (tournamentId) {
      this.subscriptions.push(
        this.tournamentService.tournaments$.subscribe((tournaments) => {
          this.tournament = tournaments.find((t) => t.id === tournamentId);
          if (this.tournament) {
            this.updateLevelInfo();
            this.timerService.startTimer(this.tournament);
          }
        })
      );
    }
  }

  private subscribeToTimer() {
    this.subscriptions.push(
      this.timerService.currentLevel$.subscribe((level) => {
        this.currentLevel = level;
        this.updateLevelInfo();
      }),
      this.timerService.remainingTime$.subscribe((time) => {
        this.remainingTime = time;
      }),
      this.timerService.isPaused$.subscribe((paused) => {
        this.isPaused = paused;
      })
    );
  }

  private updateLevelInfo() {
    if (this.tournament) {
      this.currentBlindLevel = this.tournament.blindStructure.levels[this.currentLevel];
      this.nextLevel = this.tournament.blindStructure.levels[this.currentLevel + 1];
      this.levelsRemaining = this.timerService.getLevelsRemaining(this.tournament);
    }
  }

  pauseResumeTimer() {
    if (this.isPaused) {
      this.timerService.resumeTimer();
    } else {
      this.timerService.pauseTimer();
    }
  }

  async skipLevel() {
    const alert = await this.alertController.create({
      header: "Skip Level",
      message: "Are you sure you want to advance to the next level?",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Skip",
          handler: () => {
            if (this.tournament) {
              const nextLevel = this.currentLevel + 1;
              const levelDuration = this.tournament.settings.levelDuration * 60;
              this.timerService.syncLevel(nextLevel, levelDuration);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async openSyncModal() {
    const alert = await this.alertController.create({
      header: "Sync Tournament",
      message: "Manually sync the current level and time",
      inputs: [
        {
          name: "level",
          type: "number",
          placeholder: "Level number",
          value: this.currentLevel + 1,
          min: 1,
          max: this.tournament?.blindStructure.levels.length || 1,
        },
        {
          name: "minutes",
          type: "number",
          placeholder: "Minutes remaining",
          value: Math.floor(this.remainingTime / 60),
          min: 0,
          max: 60,
        },
        {
          name: "seconds",
          type: "number",
          placeholder: "Seconds remaining",
          value: this.remainingTime % 60,
          min: 0,
          max: 59,
        },
      ],
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Sync",
          handler: (data) => {
            const level = parseInt(data.level) - 1; // Convert to 0-based index
            const time = parseInt(data.minutes) * 60 + parseInt(data.seconds);
            this.timerService.syncLevel(level, time);
            this.tournamentService.syncTournament(level, time);
          },
        },
      ],
    });
    await alert.present();
  }

  getProgress(): number {
    if (!this.tournament) return 0;
    return (this.currentLevel + 1) / this.tournament.blindStructure.levels.length;
  }
}
```

## Styling and Themes

### Variables (`src/theme/variables.scss`)

```scss
:root {
  /** Poker Tournament Theme **/
  --ion-color-primary: #1a472a;
  --ion-color-primary-rgb: 26, 71, 42;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #174025;
  --ion-color-primary-tint: #31593f;

  --ion-color-secondary: #d4af37;
  --ion-color-secondary-rgb: 212, 175, 55;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #bb9a31;
  --ion-color-secondary-tint: #d8b74b;

  --ion-color-warning: #ffc409;
  --ion-color-danger: #eb445a;
  --ion-color-success: #2dd36f;

  /** Custom Poker Colors **/
  --poker-green: #1a472a;
  --poker-gold: #d4af37;
  --poker-red: #8b0000;
  --poker-black: #2c2c2c;
}
```

### Tournament Timer Styles (`src/app/features/tournament/pages/tournament-timer/tournament-timer.page.scss`)

```scss
.tournament-timer {
  .timer-container {
    padding: 20px;
    text-align: center;

    .level-info {
      background: var(--ion-color-light);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--poker-green);
        margin: 0 0 16px 0;
      }

      .blinds {
        font-size: 2rem;
        font-weight: 600;
        color: var(--ion-color-dark);

        .small-blind,
        .big-blind {
          color: var(--poker-gold);
        }
      }

      .ante {
        font-size: 1.2rem;
        color: var(--ion-color-medium);
        margin-top: 8px;
      }
    }

    .timer-display {
      margin: 32px 0;

      .countdown-display {
        font-size: 5rem;
        font-weight: bold;
        color: var(--ion-color-dark);
        font-family: "Courier New", monospace;

        &.warning {
          color: var(--ion-color-danger);
          animation: pulse 1s infinite;
        }

        &.paused {
          opacity: 0.6;
        }

        .separator {
          animation: blink 1s infinite;
        }
      }
    }

    .progress-info {
      margin: 24px 0;

      p {
        font-size: 1.1rem;
        color: var(--ion-color-medium);
        margin-bottom: 12px;
      }
    }

    .timer-controls {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 32px 0;

      ion-button {
        min-width: 120px;
      }
    }

    .next-level {
      background: var(--ion-color-light);
      border-radius: 12px;
      padding: 16px;
      margin-top: 24px;

      h3 {
        color: var(--ion-color-medium);
        font-size: 1rem;
        margin: 0 0 8px 0;
      }

      .next-blinds {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--poker-green);
      }
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
```

## Module Structure

### Tournament Module (`src/app/features/tournament/tournament.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../../shared/shared.module";
import { TournamentRoutingModule } from "./tournament-routing.module";

// Pages
import { TournamentListPage } from "./pages/tournament-list/tournament-list.page";
import { TournamentDetailPage } from "./pages/tournament-detail/tournament-detail.page";
import { TournamentCreatePage } from "./pages/tournament-create/tournament-create.page";
import { TournamentTimerPage } from "./pages/tournament-timer/tournament-timer.page";

// Components
import { BlindLevelCardComponent } from "./components/blind-level-card/blind-level-card.component";
import { TournamentControlsComponent } from "./components/tournament-controls/tournament-controls.component";

@NgModule({
  declarations: [TournamentListPage, TournamentDetailPage, TournamentCreatePage, TournamentTimerPage, BlindLevelCardComponent, TournamentControlsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, SharedModule, TournamentRoutingModule],
})
export class TournamentModule {}
```

### Shared Module (`src/app/shared/shared.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

// Components
import { HeaderComponent } from "./components/header/header.component";
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { LevelDisplayComponent } from "./components/level-display/level-display.component";

// Pipes
import { TimeFormatPipe } from "./pipes/time-format.pipe";
import { CurrencyFormatPipe } from "./pipes/currency-format.pipe";

@NgModule({
  declarations: [HeaderComponent, CountdownTimerComponent, LevelDisplayComponent, TimeFormatPipe, CurrencyFormatPipe],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, CountdownTimerComponent, LevelDisplayComponent, TimeFormatPipe, CurrencyFormatPipe, CommonModule, IonicModule, FormsModule],
})
export class SharedModule {}
```

## Installation and Setup Commands

```bash
# Install Ionic CLI
npm install -g @ionic/cli

# Create new Ionic Angular project
ionic start poker-tournament-tracker tabs --type=angular

# Install additional dependencies
npm install @ionic/storage-angular
npm install @capacitor/haptics
npm install @capacitor/status-bar

# Add platforms
ionic capacitor add android
ionic capacitor add ios

# Generate components and services
ionic generate page features/tournament/pages/tournament-timer
ionic generate service features/tournament/services/timer
ionic generate component shared/components/countdown-timer
ionic generate service core/services/storage

# Build and run
ionic build
ionic capacitor run android
ionic capacitor run ios
```

## Key Implementation Features

### 1. **Modular Architecture**

- Feature-based modules for scalability
- Shared components and services
- Lazy-loaded routes for performance

### 2. **State Management**

- BehaviorSubjects for reactive data flow
- Local storage persistence
- Service-based state management

### 3. **Timer Functionality**

- Real-time countdown with RxJS intervals
- Pause/resume capability
- Manual sync for level and time
- Visual and audio warnings

### 4. **Responsive Design**

- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly controls

### 5. **Data Persistence**

- Local storage for offline capability
- Export/import functionality
- Tournament history tracking

## Sync Modal Component (`src/app/shared/components/sync-modal/sync-modal.component.ts`)

```typescript
import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tournament } from "../../models";

@Component({
  selector: "app-sync-modal",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Sync Tournament</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form [formGroup]="syncForm" (ngSubmit)="syncTournament()">
        <ion-list>
          <ion-item>
            <ion-label position="stacked">Current Level</ion-label>
            <ion-select formControlName="level" interface="popover">
              <ion-select-option *ngFor="let level of tournament.blindStructure.levels; let i = index" [value]="i">
                Level {{ i + 1 }}: {{ level.smallBlind }}/{{ level.bigBlind }}
                <span *ngIf="level.isBreak"> (Break)</span>
              </ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Minutes Remaining</ion-label>
            <ion-input type="number" formControlName="minutes" min="0" max="59"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Seconds Remaining</ion-label>
            <ion-input type="number" formControlName="seconds" min="0" max="59"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Pause Timer After Sync</ion-label>
            <ion-toggle formControlName="pauseAfterSync"></ion-toggle>
          </ion-item>
        </ion-list>

        <div class="sync-actions">
          <ion-button expand="block" type="submit" [disabled]="!syncForm.valid">
            <ion-icon name="sync" slot="start"></ion-icon>
            Sync Tournament
          </ion-button>
        </div>
      </form>
    </ion-content>
  `,
  styleUrls: ["./sync-modal.component.scss"],
})
export class SyncModalComponent implements OnInit {
  @Input() tournament!: Tournament;
  @Input() currentLevel: number = 0;
  @Input() remainingTime: number = 0;

  syncForm!: FormGroup;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.syncForm = this.formBuilder.group({
      level: [this.currentLevel, [Validators.required, Validators.min(0)]],
      minutes: [Math.floor(this.remainingTime / 60), [Validators.required, Validators.min(0), Validators.max(59)]],
      seconds: [this.remainingTime % 60, [Validators.required, Validators.min(0), Validators.max(59)]],
      pauseAfterSync: [false],
    });
  }

  syncTournament() {
    if (this.syncForm.valid) {
      const formValue = this.syncForm.value;
      const totalSeconds = formValue.minutes * 60 + formValue.seconds;

      this.modalController.dismiss(
        {
          level: formValue.level,
          time: totalSeconds,
          pauseAfterSync: formValue.pauseAfterSync,
        },
        "sync"
      );
    }
  }

  dismiss() {
    this.modalController.dismiss(null, "cancel");
  }
}
```

## Statistics Service (`src/app/features/statistics/services/statistics.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Tournament } from "../../../shared/models";
import { StorageService } from "../../../core/services/storage.service";

export interface TournamentStats {
  totalTournaments: number;
  completedTournaments: number;
  averageDuration: number;
  mostUsedBlindStructure: string;
  longestTournament: Tournament | null;
  recentActivity: Tournament[];
}

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private storageService: StorageService) {}

  async getTournamentStats(): Promise<TournamentStats> {
    const tournaments: Tournament[] = (await this.storageService.get("tournaments")) || [];
    const completed = tournaments.filter((t) => t.isCompleted);

    return {
      totalTournaments: tournaments.length,
      completedTournaments: completed.length,
      averageDuration: this.calculateAverageDuration(completed),
      mostUsedBlindStructure: this.getMostUsedBlindStructure(tournaments),
      longestTournament: this.getLongestTournament(completed),
      recentActivity: tournaments.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5),
    };
  }

  private calculateAverageDuration(tournaments: Tournament[]): number {
    if (tournaments.length === 0) return 0;

    const totalDuration = tournaments.reduce((sum, tournament) => {
      const duration = new Date(tournament.updatedAt).getTime() - new Date(tournament.startTime).getTime();
      return sum + duration;
    }, 0);

    return totalDuration / tournaments.length / (1000 * 60); // Convert to minutes
  }

  private getMostUsedBlindStructure(tournaments: Tournament[]): string {
    const structureCount = tournaments.reduce((acc, tournament) => {
      const structureName = tournament.blindStructure.name;
      acc[structureName] = (acc[structureName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(structureCount).reduce((a, b) => (structureCount[a] > structureCount[b] ? a : b)) || "None";
  }

  private getLongestTournament(tournaments: Tournament[]): Tournament | null {
    if (tournaments.length === 0) return null;

    return tournaments.reduce((longest, current) => {
      const currentDuration = new Date(current.updatedAt).getTime() - new Date(current.startTime).getTime();
      const longestDuration = new Date(longest.updatedAt).getTime() - new Date(longest.startTime).getTime();
      return currentDuration > longestDuration ? current : longest;
    });
  }
}
```

## Tournament Create Page (`src/app/features/tournament/pages/tournament-create/tournament-create.page.html`)

```html
<ion-content>
  <div class="create-tournament-container">
    <form [formGroup]="tournamentForm" (ngSubmit)="createTournament()">
      <!-- Basic Information -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Tournament Details</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Tournament Name *</ion-label>
            <ion-input formControlName="name" placeholder="Enter tournament name"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Blind Structure *</ion-label>
            <ion-select formControlName="blindStructure" interface="popover">
              <ion-select-option *ngFor="let structure of blindStructures" [value]="structure"> {{ structure.name }} </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <!-- Tournament Settings -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Tournament Settings</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Level Duration (minutes) *</ion-label>
            <ion-input type="number" formControlName="levelDuration" min="1" max="120"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Break Frequency (levels)</ion-label>
            <ion-input type="number" formControlName="breakFrequency" min="1" max="10"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Break Duration (minutes)</ion-label>
            <ion-input type="number" formControlName="breakDuration" min="5" max="30"> </ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Sound Notifications</ion-label>
            <ion-toggle formControlName="soundEnabled"></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Auto Advance Levels</ion-label>
            <ion-toggle formControlName="autoAdvance"></ion-toggle>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <!-- Preview -->
      <ion-card *ngIf="selectedBlindStructure">
        <ion-card-header>
          <ion-card-title>Structure Preview</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <div class="levels-preview">
            <div *ngFor="let level of selectedBlindStructure.levels.slice(0, 5); let i = index" class="level-preview">
              <span class="level-number">{{ i + 1 }}.</span>
              <span *ngIf="!level.isBreak" class="blinds">
                {{ level.smallBlind }}/{{ level.bigBlind }}
                <small *ngIf="level.ante"> ({{ level.ante }})</small>
              </span>
              <span *ngIf="level.isBreak" class="break">{{ level.breakName || 'Break' }}</span>
            </div>
            <div *ngIf="selectedBlindStructure.levels.length > 5" class="more-levels">... and {{ selectedBlindStructure.levels.length - 5 }} more levels</div>
          </div>
        </ion-card-content>
      </ion-card>

      <!-- Actions -->
      <div class="form-actions">
        <ion-button expand="block" type="submit" [disabled]="!tournamentForm.valid">
          <ion-icon name="trophy" slot="start"></ion-icon>
          Create Tournament
        </ion-button>

        <ion-button expand="block" fill="outline" (click)="cancel()"> Cancel </ion-button>
      </div>
    </form>
  </div>
</ion-content>
```

## Blind Level Card Component (`src/app/features/tournament/components/blind-level-card/blind-level-card.component.html`)

```html
<ion-card [class.current]="isCurrent" [class.completed]="isCompleted" [class.break]="level.isBreak">
  <ion-card-content>
    <div class="level-header">
      <span class="level-number">{{ level.levelNumber }}</span>
      <span class="level-duration">{{ level.duration }}min</span>
    </div>

    <div class="level-content" *ngIf="!level.isBreak">
      <div class="blinds-info">
        <div class="blind-amounts">
          <span class="small-blind">{{ level.smallBlind | currency:'USD':'symbol':'1.0-0' }}</span>
          <span class="separator">/</span>
          <span class="big-blind">{{ level.bigBlind | currency:'USD':'symbol':'1.0-0' }}</span>
        </div>
        <div class="ante-info" *ngIf="level.ante">Ante: {{ level.ante | currency:'USD':'symbol':'1.0-0' }}</div>
      </div>
    </div>

    <div class="break-content" *ngIf="level.isBreak">
      <ion-icon name="cafe-outline" class="break-icon"></ion-icon>
      <span class="break-text">{{ level.breakName || 'Break' }}</span>
    </div>

    <div class="level-indicator" *ngIf="isCurrent">
      <ion-badge color="primary">Current</ion-badge>
    </div>
  </ion-card-content>
</ion-card>
```

## App Module Configuration (`src/app/app.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage-angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Core Module
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "ios", // Consistent UI across platforms
      rippleEffect: true,
      animated: true,
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Tab Layout Routing (`src/app/layout/components/tab-layout/tab-layout-routing.module.ts`)

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabLayoutComponent } from "./tab-layout.component";

const routes: Routes = [
  {
    path: "",
    component: TabLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import("../../../features/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "tournaments",
        loadChildren: () => import("../../../features/tournament/tournament.module").then((m) => m.TournamentModule),
      },
      {
        path: "timer",
        redirectTo: "tournaments/timer",
      },
      {
        path: "statistics",
        loadChildren: () => import("../../../features/statistics/statistics.module").then((m) => m.StatisticsModule),
      },
      {
        path: "settings",
        loadChildren: () => import("../../../features/settings/settings.module").then((m) => m.SettingsModule),
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLayoutRoutingModule {}
```

## Advanced Timer Features

### Timer Service with Notifications (`src/app/features/tournament/services/timer.service.ts` - Extended)

```typescript
// ... (previous timer service code) ...

export class TimerService {
  // ... (previous properties) ...

  private notificationService?: any; // Add notification service injection

  // Enhanced timer with notifications and persistence
  startTimer(tournament: Tournament): void {
    this.stopTimer();

    const levelDuration = tournament.settings.levelDuration * 60;
    this.remainingTimeSubject.next(levelDuration);
    this.currentLevelSubject.next(tournament.currentLevel);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (!this.isPausedSubject.value) {
        const currentTime = this.remainingTimeSubject.value;

        // Check for notifications
        this.checkNotifications(currentTime, tournament.settings);

        if (currentTime > 0) {
          this.remainingTimeSubject.next(currentTime - 1);
          this.saveTimerState(tournament.id, currentTime - 1);
        } else {
          this.advanceLevel(tournament);
        }
      }
    });
  }

  private checkNotifications(remainingTime: number, settings: any): void {
    // 1 minute warning
    if (remainingTime === 60 && settings.soundEnabled) {
      this.playWarningSound();
    }

    // 30 second warning
    if (remainingTime === 30 && settings.soundEnabled) {
      this.playWarningSound();
    }

    // 10 second countdown
    if (remainingTime <= 10 && remainingTime > 0 && settings.soundEnabled) {
      this.playTickSound();
    }
  }

  private playWarningSound(): void {
    // Implementation for playing warning sound
    const audio = new Audio("assets/sounds/timer-warning.mp3");
    audio.play().catch((e) => console.log("Audio play failed:", e));
  }

  private playTickSound(): void {
    // Implementation for playing tick sound
    const audio = new Audio("assets/sounds/timer-tick.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio play failed:", e));
  }

  private async saveTimerState(tournamentId: string, remainingTime: number): Promise<void> {
    const timerState = {
      tournamentId,
      currentLevel: this.currentLevelSubject.value,
      remainingTime,
      lastUpdate: Date.now(),
    };
    // Save to storage for persistence across app restarts
  }

  async restoreTimerState(tournamentId: string): Promise<void> {
    // Implementation to restore timer state from storage
  }
}
```

## Responsive Layout Styles (`src/theme/responsive.scss`)

```scss
// Tablet and Desktop optimizations
@media (min-width: 768px) {
  .tournament-timer {
    .timer-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px;
    }

    .timer-controls {
      justify-content: space-between;
      max-width: 500px;
      margin: 32px auto;
    }
  }

  .tournaments-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  }

  .settings-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    .quick-actions,
    .active-tournament-card {
      display: inline-block;
      width: calc(50% - 10px);
      margin: 0 5px;
    }
  }
}

// Mobile optimizations
@media (max-width: 767px) {
  .tournament-timer {
    .timer-display .countdown-display {
      font-size: 4rem;
    }

    .timer-controls {
      flex-direction: column;

      ion-button {
        margin: 4px 0;
      }
    }
  }
}
```

## Capacitor Configuration (`capacitor.config.ts`)

```typescript
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.pokertournament.tracker",
  appName: "Poker Tournament Tracker",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    StatusBar: {
      style: "Dark",
      backgroundColor: "#1a472a",
    },
    Keyboard: {
      resize: "body",
      style: "dark",
    },
    App: {
      windowCloseConfirmation: false,
    },
  },
};

export default config;
```

## Environment Configuration

### Development Environment (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  version: "1.0.0",
  api: {
    baseUrl: "http://localhost:3000/api",
    timeout: 10000,
  },
  features: {
    enableAdvancedStats: true,
    enableCloudSync: false,
    enableDebugMode: true,
  },
  storage: {
    storagePrefix: "poker_tournament_",
    enableEncryption: false,
  },
};
```

### Production Environment (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  version: "1.0.0",
  api: {
    baseUrl: "https://api.pokertournamenttracker.com",
    timeout: 15000,
  },
  features: {
    enableAdvancedStats: true,
    enableCloudSync: true,
    enableDebugMode: false,
  },
  storage: {
    storagePrefix: "poker_tournament_",
    enableEncryption: true,
  },
};
```

## Default Data Files

### Default Blind Structures (`src/assets/data/default-blind-structures.json`)

```json
[
  {
    "id": "standard",
    "name": "Standard Tournament",
    "description": "Classic tournament structure with gradual blind increases",
    "isDefault": true,
    "levels": [
      { "levelNumber": 1, "smallBlind": 25, "bigBlind": 50, "duration": 15, "isBreak": false },
      { "levelNumber": 2, "smallBlind": 50, "bigBlind": 100, "duration": 15, "isBreak": false },
      { "levelNumber": 3, "smallBlind": 75, "bigBlind": 150, "duration": 15, "isBreak": false },
      { "levelNumber": 4, "smallBlind": 100, "bigBlind": 200, "duration": 15, "isBreak": false },
      { "levelNumber": 5, "smallBlind": 0, "bigBlind": 0, "duration": 15, "isBreak": true, "breakName": "15 Minute Break" },
      { "levelNumber": 6, "smallBlind": 150, "bigBlind": 300, "duration": 20, "isBreak": false },
      { "levelNumber": 7, "smallBlind": 200, "bigBlind": 400, "duration": 20, "isBreak": false },
      { "levelNumber": 8, "smallBlind": 300, "bigBlind": 600, "duration": 20, "isBreak": false },
      { "levelNumber": 9, "smallBlind": 400, "bigBlind": 800, "duration": 20, "isBreak": false },
      { "levelNumber": 10, "smallBlind": 500, "bigBlind": 1000, "ante": 100, "duration": 20, "isBreak": false }
    ]
  },
  {
    "id": "turbo",
    "name": "Turbo Tournament",
    "description": "Fast-paced tournament with shorter levels",
    "isDefault": false,
    "levels": [
      { "levelNumber": 1, "smallBlind": 50, "bigBlind": 100, "duration": 8, "isBreak": false },
      { "levelNumber": 2, "smallBlind": 75, "bigBlind": 150, "duration": 8, "isBreak": false },
      { "levelNumber": 3, "smallBlind": 100, "bigBlind": 200, "duration": 8, "isBreak": false },
      { "levelNumber": 4, "smallBlind": 150, "bigBlind": 300, "duration": 8, "isBreak": false },
      { "levelNumber": 5, "smallBlind": 200, "bigBlind": 400, "duration": 8, "isBreak": false }
    ]
  }
]
```

## Build and Deployment Scripts

### Additional Package.json Scripts

```json
{
  "scripts": {
    "build:prod": "ionic build --prod",
    "build:android": "ionic capacitor build android",
    "build:ios": "ionic capacitor build ios",
    "deploy:android": "ionic capacitor run android --device",
    "deploy:ios": "ionic capacitor run ios --device",
    "test:unit": "ng test",
    "test:e2e": "ng e2e",
    "lint:fix": "ng lint --fix",
    "analyze": "npx webpack-bundle-analyzer dist/main.js"
  }
}
```

## Testing Configuration

### Karma Configuration (`karma.conf.js`)

```javascript
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [require("karma-jasmine"), require("karma-chrome-headless"), require("karma-jasmine-html-reporter"), require("karma-coverage"), require("@angular-devkit/build-angular/plugins/karma")],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/poker-tournament-tracker"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }, { type: "lcov" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
```

## Performance Optimizations

### Lazy Loading Strategy (`src/app/app-routing.module.ts` - Enhanced)

```typescript
const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "tournament-timer/:id",
    loadChildren: () => import("./features/tournament/tournament.module").then((m) => m.TournamentModule),
    data: { preload: true },
  },
  {
    path: "blind-structure-editor",
    loadChildren: () => import("./features/settings/settings.module").then((m) => m.SettingsModule),
  },
];
```

## Additional Utilities

### Time Format Pipe (`src/app/shared/pipes/time-format.pipe.ts`)

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeFormat",
})
export class TimeFormatPipe implements PipeTransform {
  transform(seconds: number, format: "full" | "short" = "full"): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (format === "short") {
      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      }
      return `${minutes}:${secs.toString().padStart(2, "0")}`;
    }

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  }
}
```

### Platform Service (`src/app/core/services/platform.service.ts`)

```typescript
import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { StatusBar } from "@capacitor/status-bar";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  constructor(private platform: Platform) {}

  async initialize(): Promise<void> {
    await this.platform.ready();

    if (this.platform.is("capacitor")) {
      await this.setupStatusBar();
    }
  }

  private async setupStatusBar(): Promise<void> {
    await StatusBar.setStyle({ style: "DARK" });
    await StatusBar.setBackgroundColor({ color: "#1a472a" });
  }

  async triggerHaptic(): Promise<void> {
    if (this.platform.is("capacitor")) {
      await Haptics.impact({ style: ImpactStyle.Medium });
    }
  }

  isNative(): boolean {
    return this.platform.is("capacitor");
  }

  isMobile(): boolean {
    return this.platform.is("mobile");
  }
}
```

This structure provides a solid foundation for a poker tournament tracking app with room for future expansion and maintenance. The modular architecture ensures scalability, proper separation of concerns, and maintainable code for a medium-to-large scale application.
