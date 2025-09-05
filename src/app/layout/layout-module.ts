import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLayoutComponent } from './components/tab-layout/tab-layout.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared-module';
import { LayoutRoutingModule } from './layout-routing-module';

@NgModule({
  declarations: [TabLayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, IonicModule, SharedModule],
  exports: [TabLayoutComponent],
})
export class LayoutModule {}
