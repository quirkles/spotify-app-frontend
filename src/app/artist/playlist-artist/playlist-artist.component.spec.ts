import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistArtistComponent } from './playlist-artist.component';

describe('PlaylistArtistComponent', () => {
  let component: PlaylistArtistComponent;
  let fixture: ComponentFixture<PlaylistArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
