import { AuthService } from './auth/auth.service';
import { PlayersService } from './players/players.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { GuestModule } from './guest/guest.module';
import { PlayersModule } from './players/players.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    routingComponents,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    PlayersModule,
    AuthModule,
    AdminModule,
    GuestModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule],
  providers: [PlayersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
