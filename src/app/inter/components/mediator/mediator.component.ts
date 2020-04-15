import {Component, OnInit} from '@angular/core';
import {IStock} from '../IStock';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss']
})
export class MediatorComponent implements OnInit {
  stock: IStock;

  constructor() {}

  ngOnInit(): void {}

  priceQuoteHandler(event: IStock) {
    this.stock = event;
  }
}
