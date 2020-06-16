import { AuthGuard } from './auth.guard';
import { GuestComponent } from './../guest/guest/guest.component';
import { AdminComponent } from './../admin/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'guest', component: GuestComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AuthRoutingModule { }
