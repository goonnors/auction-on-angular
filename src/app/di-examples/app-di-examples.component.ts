import {Component, Inject, OnInit} from '@angular/core';
import {BACKEND_URL} from './services/backend-url';

@Component({
  selector: 'app-app-di-examples',
  templateUrl: './app-di-examples.component.html',
  styleUrls: ['./app-di-examples.component.scss'],
  providers: [{provide: BACKEND_URL, useValue: 'myQAserver.com'}]
})
export class AppDiExamplesComponent implements OnInit {

  constructor(@Inject(BACKEND_URL) public url) { }

  ngOnInit(): void {
  }

}
