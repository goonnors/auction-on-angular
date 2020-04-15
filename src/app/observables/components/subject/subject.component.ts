import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  mySubject: Observable<Event> = new Subject(); // for any events
  myKeySubject: Observable<KeyboardEvent> = new Subject(); // for keyboard events

  constructor() {
    this.myKeySubject.subscribe(({ type, key }) => {
      console.log(`Event: ${type} key: ${key}`);
    });

    this.mySubject.subscribe(({ type, target }) => {
      console.log(`Event: ${type} value: ${(<HTMLInputElement> target).value}`);
    });
  }

  ngOnInit(): void {
  }

}
