import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero/detail/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroService } from './hero/service/hero.service';
import { DashboardComponent } from './hero/dashboard/dashboard.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }

