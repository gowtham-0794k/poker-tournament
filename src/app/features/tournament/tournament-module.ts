import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoutingModule } from './tournament-routing-module';
import { share } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TournamentRoutingModule],
})
export class TournamentModule {}
