import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodListItemComponent } from './mood-list-item.component';

describe('MoodListItemComponent', () => {
  let component: MoodListItemComponent;
  let fixture: ComponentFixture<MoodListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
