import {Component, Input, OnInit} from '@angular/core';
import {Mood} from "../services/spotify";
import {ResizedEvent} from "../resize.directive";
import {Observable, of} from "rxjs";
import {AppStore, fetchMoodsRequest, listMoods} from "../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.scss']
})
export class MoodListComponent implements OnInit {
  moods$: Observable<Mood[]> = of([]);
  slidesPerGroupInItems = 2

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.store.dispatch(fetchMoodsRequest({params: {}}))
    this.moods$ = this.store.select(listMoods())
  }

  handleElResize(event: ResizedEvent) {
    const newWidth = event.newRect.width

    if (newWidth < 700) {
      this.slidesPerGroupInItems = 2
    } else if (newWidth < 820) {
      this.slidesPerGroupInItems = 3
    } else if (newWidth < 940) {
      this.slidesPerGroupInItems = 4
    } else if (newWidth < 1060) {
      this.slidesPerGroupInItems = 5
    } else if (newWidth < 1180) {
      this.slidesPerGroupInItems = 6
    } else if (newWidth < 1300) {
      this.slidesPerGroupInItems = 7
    } else if (newWidth < 1420) {
      this.slidesPerGroupInItems = 8
    } else {
      this.slidesPerGroupInItems = 9
    }
  }
}
