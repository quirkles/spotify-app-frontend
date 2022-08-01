import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../services/auth.service';

import {Mood, SpotifyUser, UserService} from "../services/spotify";
import {setUserData, AppStore, selectById, fetchMoodsRequest, listMoods} from '../store';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mySpotifyData$: Observable<Partial<SpotifyUser>> = of({});
  moods$: Observable<Mood[]> = of([]);
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppStore>
  ) {
    const userSpotifyId = this.authService.userSpotifyId;
    this.moods$ = this.store.select(listMoods())
    if (!userSpotifyId) {
      this.router.parseUrl('/login');
    } else {
      this.mySpotifyData$ = this.store.select(selectById(userSpotifyId));
    }
  }

  ngOnInit(): void | Promise<boolean> {
    this.store.dispatch(fetchMoodsRequest({ params: {} }))
    this.userService.getPersonalData().then((resp) =>
      this.store.dispatch(
        setUserData({
          userSpotifyId: resp.id,
          userData: resp,
        })
      )
    );
  }
}
