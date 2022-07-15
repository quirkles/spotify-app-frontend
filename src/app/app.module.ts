import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { appStores } from './store';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ...appStores],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
