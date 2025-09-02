import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerPageRoutingModule } from './timer-routing.module';

import { TimerPage } from './timer.page';
import { BlindStructureComponent } from './blind-structure-component/blind-structure-component.component';
import { MenuComponent } from 'src/components/menu/menu.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TimerPageRoutingModule],
  declarations: [TimerPage, BlindStructureComponent, MenuComponent],
})
export class TimerPageModule {}
