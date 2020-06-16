import { PlayersModule } from './../players/players.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest/guest.component';


@NgModule({
  declarations: [GuestComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    PlayersModule
  ]
})
export class GuestModule { }
