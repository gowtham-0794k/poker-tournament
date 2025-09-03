import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerPageRoutingModule } from './timer-routing.module';

import { TimerPage } from './timer.page';
import { BlindStructureComponent } from './blind-structure-component/blind-structure-component.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { BlindSettingsModalComponent } from './blind-settings-modal/blind-settings-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TimerPageRoutingModule],
  declarations: [
    TimerPage,
    BlindStructureComponent,
    BlindSettingsModalComponent,
    MenuComponent,
  ],
})
export class TimerPageModule {}
