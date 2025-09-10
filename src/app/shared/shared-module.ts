import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { BlindStructureComponent } from './components/blind-structure-component/blind-structure-component.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [HeaderComponent, BlindStructureComponent, SideBarComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, BlindStructureComponent, SideBarComponent],
})
export class SharedModule {}
