import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

// tabs-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'timer',
        loadChildren: () =>
          import('./timer/timer.module').then((m) => m.TimerPageModule),
      },
      {
        path: '',
        redirectTo: 'timer',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
