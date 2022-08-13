import {Observable} from 'rxjs';
import { v4 } from 'uuid';

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthService} from '../auth.service';
import {FetchMoodParams, FetchMoodsResponse, Mood, UpdateMoodPayload, UpdateMoodResponse} from './types';
import {environment} from "../../../environments/environment";
import {convertObjectToUrlParams} from "./utils";

@Injectable({
  providedIn: `root`,
})
export class MoodService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {
  }

  createMood(moodName: string): Observable<Mood> {
    return this.httpClient.post<Mood>(`${environment.spotifyApiUrl}/mood`, {
      name: moodName,
      id: v4()
    }, {
      headers: {
        authorization: `Bearer ${this.authService.token}`,
      },
    })
  }

  fetchMoods(params: FetchMoodParams = {limit: 10}): Observable<FetchMoodsResponse> {
    return this.httpClient.get<FetchMoodsResponse>(`${environment.spotifyApiUrl}/mood?${convertObjectToUrlParams(params)}`, {
      headers: {
        authorization: `Bearer ${this.authService.token}`,
      },
    })
  }

  fetchMoodById(moodId: string): Observable<{ mood: Mood}> {
    return this.httpClient.get<{ mood: Mood }>(`${environment.spotifyApiUrl}/mood/${moodId}`, {
      headers: {
        authorization: `Bearer ${this.authService.token}`,
      },
    })
  }

  updateMood(moodId: string, updatePayload: UpdateMoodPayload): Observable<UpdateMoodResponse> {
    return this.httpClient.patch<UpdateMoodResponse>(
      `${environment.spotifyApiUrl}/mood/${moodId}`,
      updatePayload,
      {
        headers: {
          authorization: `Bearer ${this.authService.token}`,
        }
      })
    }

  removeArtistFromMood(params: { moodId: string, artistId: string}): Observable<UpdateMoodResponse> {
    const {
      moodId, artistId
    } = params
    return this.httpClient.delete<{ mood: Mood }>(
      `${environment.spotifyApiUrl}/mood/${moodId}/artist/${artistId}`,
      {
        headers: {
          authorization: `Bearer ${this.authService.token}`,
        }
      })
    }
}
