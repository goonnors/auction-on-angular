import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {sample, filter, map, share, timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-subjectshared',
  templateUrl: './subjectshared.component.html',
  styleUrls: ['./subjectshared.component.scss']
})
export class SubjectsharedComponent implements OnInit {

  keyValue: string;
  inputValue: string;
  mySubject: Subject<Event> = new Subject();

  constructor() {
    // subscriber 1
    this.mySubject
      .pipe(
        filter(({ type }) => type === 'keyup'),
        map(e => (<KeyboardEvent>e).key),
      ).subscribe(value => {
        this.keyValue = value;
      });

    // subscriber 2
    this.mySubject.pipe(
      filter(({type}) => type === 'input'),
      map(e => (<HTMLInputElement>e.target).value)
    ).subscribe(value => {
      this.inputValue = value;
    });
  }

  ngOnInit(): void {
  }

}
