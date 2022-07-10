import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from './config';
import { firstValueFrom } from 'rxjs';

export interface MeResponse {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      height: null;
      url: string;
      width: null;
    }
  ];
  product: string;
  type: string;
  uri: string;
}

@Injectable({
  providedIn: `root`,
})
export class SpotifyApiService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  getPersonalData(): Promise<MeResponse> {
    return firstValueFrom(
      this.httpClient.get<MeResponse>(`${CONFIG.apiUrl}/me`, {
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
