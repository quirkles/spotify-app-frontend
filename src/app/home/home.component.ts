import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { AuthService } from '../services/auth.service';

import { SpotifyUser } from '../services/spotify/types';
import { setUserData } from '../store/users/user.actions';
import {AppStore, UserState} from '../store';
import { Router } from '@angular/router';
import { selectById } from '../store/users/users.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mySpotifyData$: Observable<Partial<SpotifyUser>> = of({});
  constructor(
    private spotifyApiService: SpotifyApiService,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppStore>
  ) {
    const userSpotifyId = this.authService.userSpotifyId;
    if (!userSpotifyId) {
      this.router.parseUrl('/login');
    } else {
      this.mySpotifyData$ = this.store.select(selectById(userSpotifyId));
    }
  }

  ngOnInit(): void | Promise<boolean> {
    this.spotifyApiService.getPersonalData().then((resp) =>
      this.store.dispatch(
        setUserData({
          userSpotifyId: resp.id,
          userData: resp,
        })
      )
    );
  }
}
