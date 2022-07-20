import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { appStores } from './store';

import {httpInterceptorProviders} from "./http-interceptors";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent, LoginComponent, ProfileCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ...appStores],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
