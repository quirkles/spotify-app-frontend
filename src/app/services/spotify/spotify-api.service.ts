import {firstValueFrom} from 'rxjs';
import { v4 } from 'uuid';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthService} from '../auth.service';
import {Mood, SpotifyUser} from './types';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: `root`,
})
export class SpotifyApiService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {
  }

  getPersonalData(): Promise<SpotifyUser> {
    return firstValueFrom(
      this.httpClient.get<SpotifyUser>(`${environment.spotifyApiUrl}/me`, {
        headers: {
          authorization: `Bearer ${this.authService.token}`,
        },
      })
    );
  }

  createMood(moodName: string): Promise<Mood> {
    return firstValueFrom(
      this.httpClient.post<Mood>(`${environment.spotifyApiUrl}/mood`, {
        name: moodName,
        id: v4()
      }, {
        headers: {
          authorization: `Bearer ${this.authService.token}`,
        },
      })
    );

  }
}
