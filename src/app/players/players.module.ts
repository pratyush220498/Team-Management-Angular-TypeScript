import { PlayersService } from './players.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersFeaturesComponent } from './players-features/players-features.component';


@NgModule({
  declarations: [PlayersFeaturesComponent, PlayersListComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  exports: [PlayersFeaturesComponent, PlayersListComponent],
  providers: [PlayersService]
})
export class PlayersModule { }

