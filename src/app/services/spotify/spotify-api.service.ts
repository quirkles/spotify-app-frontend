import { firstValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth.service';
import { SpotifyUser } from './types';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: `root`,
})
export class SpotifyApiService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  getPersonalData(): Promise<SpotifyUser> {
    return firstValueFrom(
      this.httpClient.get<SpotifyUser>(`${environment.spotifyApiUrl}/me`, {
        headers: {
          authorization: `Bearer ${this.authService.token}`,
        },
      })
    );

    // .subscribe((response) => {
    //   console.log(response) //eslint-disable-line
    // });
  }
}
