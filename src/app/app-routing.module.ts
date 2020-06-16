import { TeamComponent } from './team/team.component';
import { IndianteamComponent } from './indianteam/indianteam.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';


const routes: Routes = [
  {path: 'India', component: IndianteamComponent},
  {path: 'MatchSchedule', component: MatchScheduleComponent},
  {path: 'Team', component: TeamComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MatchScheduleComponent, IndianteamComponent];
