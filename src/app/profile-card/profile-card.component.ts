import { Component, Input } from '@angular/core';
import { SpotifyUser } from '../services/spotify/types';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() user: Partial<SpotifyUser> | null = null;
}
