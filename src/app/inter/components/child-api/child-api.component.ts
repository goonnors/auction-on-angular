import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-api',
  templateUrl: './child-api.component.html',
  styleUrls: ['./child-api.component.scss']
})
export class ChildApiComponent implements OnInit {
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  greet(name) {
    this.message = `Hello from ${name}`;
  }

}
