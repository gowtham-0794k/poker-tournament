import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLayoutComponent } from './components/tab-layout/tab-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TabLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../features/home/home-module').then((m) => m.HomeModule),
      },
      {
        path: 'tournament',
        loadChildren: () =>
          import('../features/tournament/tournament-module').then(
            (m) => m.TournamentModule
          ),
      },
      {
        path: 'count-down',
        loadChildren: () =>
          import('../features/count-down/count-down-module').then(
            (m) => m.CountDownModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
