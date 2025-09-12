import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerComponent } from './pages/count-down-timer/count-down-timer.component';

const routes: Routes = [
  {
    path: 'count-down-timer',
    component: CountDownTimerComponent,
  },
  {
    path: '',
    redirectTo: 'count-down-timer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountDownRoutingModule {}
