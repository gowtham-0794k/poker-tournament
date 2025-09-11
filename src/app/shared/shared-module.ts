import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { BlindStructureComponent } from './components/blind-structure-component/blind-structure-component.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LevelSchedulesComponent } from './components/level-schedules/level-schedules.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BlindStructureComponent,
    SideBarComponent,
    LevelSchedulesComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    HeaderComponent,
    BlindStructureComponent,
    SideBarComponent,
    LevelSchedulesComponent,
  ],
})
export class SharedModule {}
