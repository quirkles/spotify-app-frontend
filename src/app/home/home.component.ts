import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { AuthService } from '../services/auth.service';

import { SpotifyUser } from '../services/spotify/types';
import { setUserData } from '../store/user.actions';
import { UserState } from '../store/users.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mySpotifyData: Partial<SpotifyUser> = {};
  constructor(
    private spotifyApiService: SpotifyApiService,
    private authService: AuthService,
    private router: Router,
    private store: Store<{ users: UserState }>
  ) {
    const userSpotifyId = this.authService.userSpotifyId;
    if (!userSpotifyId) {
      this.router.parseUrl('/login');
    } else {
      this.store.select('users').subscribe((userMap: UserState) => {
        console.log("here!") //eslint-disable-line
        console.log(userMap[userSpotifyId]) //eslint-disable-line
        this.mySpotifyData = userMap[userSpotifyId];
      });
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
