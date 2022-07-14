import { firstValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth.service';
import { CONFIG } from '../../config';
import { SpotifyUser } from './types';

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
      this.httpClient.get<SpotifyUser>(`${CONFIG.apiUrl}/me`, {
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
