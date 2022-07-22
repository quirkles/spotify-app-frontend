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
import { AddMoodComponent } from './add-mood/add-mood.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent, LoginComponent, ProfileCardComponent, AddMoodComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ...appStores, FormsModule, ReactiveFormsModule],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
