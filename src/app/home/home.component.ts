import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AuthService} from '../services/auth.service';

import {Mood, SpotifyUser, UserService} from "../services/spotify";
import {setUserData, AppStore, selectUserById, fetchMoodsRequest, listMoods} from '../store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mySpotifyData$: Observable<Partial<SpotifyUser>> = of({});

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppStore>
  ) {}

  ngOnInit(): void | Promise<boolean> {
    const userSpotifyId = this.authService.userSpotifyId;
    if (!userSpotifyId) {
      return this.router.navigateByUrl('/login');
    } else if (this.router.url === '/') {
      return this.router.navigateByUrl('/moods');
    } else {
      this.mySpotifyData$ = this.store.select(selectUserById(userSpotifyId));
    }
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
