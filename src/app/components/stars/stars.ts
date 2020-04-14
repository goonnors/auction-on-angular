import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.html',
  styles: [` .starrating { color: #d17581 }`]
})

export default class StarsComponent implements OnInit {
  @Input() count = 5;
  @Input() rating = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
