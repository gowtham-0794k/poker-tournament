import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentTimerComponent } from './pages/tournament-timer/tournament-timer.component';

const routes: Routes = [
  {
    path: 'timer',
    component: TournamentTimerComponent,
  },
  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
