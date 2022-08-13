import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionArtistComponent } from './suggestion-artist.component';

describe('SuggestionArtistComponent', () => {
  let component: SuggestionArtistComponent;
  let fixture: ComponentFixture<SuggestionArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
