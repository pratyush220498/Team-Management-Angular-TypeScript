import { PlayersListComponent } from './players-list/players-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersFeaturesComponent } from './players-features/players-features.component';


const routes: Routes = [
  {path: 'Players', component: PlayersListComponent },
  {path: 'PlayersFeatures', component: PlayersFeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
