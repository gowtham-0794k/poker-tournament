import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { BlindStructureComponent } from './components/blind-structure-component/blind-structure-component.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, BlindStructureComponent, MenuComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, BlindStructureComponent, MenuComponent],
})
export class SharedModule {}
