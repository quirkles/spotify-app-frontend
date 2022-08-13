import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {EffectsModule} from "@ngrx/effects";

import {SwiperModule} from "swiper/angular";

import {AppRoutingModule} from './app-routing.module';

import {appStores} from './store';
import {MoodEffects} from "./store";

import {httpInterceptorProviders} from "./http-interceptors";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {AddMoodComponent} from './add-mood/add-mood.component';
import {ComponentLibraryModule} from "./component-library/component-library.module";
import { MoodListComponent } from './mood-list/mood-list.component';
import { MoodListItemComponent } from './mood-list/mood-list-item/mood-list-item.component';
import { ResizeDirective } from './resize.directive';
import { MoodDetailsComponent } from './mood-details/mood-details.component';
import { PlaylistArtistComponent } from './artist/playlist-artist/playlist-artist.component';
import { SuggestionArtistComponent } from './artist/suggestion-artist/suggestion-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    ProfileCardComponent,
    AddMoodComponent,
    MoodListComponent,
    MoodListItemComponent,
    ResizeDirective,
    MoodDetailsComponent,
    PlaylistArtistComponent,
    SuggestionArtistComponent,
  ],
  imports: [
    ...appStores,
    EffectsModule.forRoot([MoodEffects]),
    ComponentLibraryModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  exports: [ComponentLibraryModule, ResizeDirective],
  bootstrap: [AppComponent],
})

export class AppModule {}
