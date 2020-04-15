import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { sample, map, share, tap } from 'rxjs/operators';
import { fromEvent, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements AfterViewInit {
  @ViewChild('myinput')
  myInputField: ElementRef; // Using ElementRef is discouraged

  data1: string;
  data2: string;

  constructor() {
  }

  ngAfterViewInit(): void {
    const keyup$: Observable<any> = fromEvent(this.myInputField.nativeElement, 'keyup');
    const keyupValue$ = keyup$.pipe(
      tap(event => console.log(event)),
      map(event => event.target.value),
      share()
    );

    // subscribe to each keyup
    keyupValue$.subscribe(value => { this.data1 = value; });

    // subscribe to 3-second samples
    keyupValue$.pipe(sample(interval(3000))).subscribe(value => { this.data2 = value; });
  }

}
