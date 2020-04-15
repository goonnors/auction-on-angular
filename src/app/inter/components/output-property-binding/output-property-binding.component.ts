import { Component, OnInit } from '@angular/core';
import {IPriceQuote} from '../../IPriceQuote';

@Component({
  selector: 'app-output-property-binding',
  templateUrl: './output-property-binding.component.html',
  styleUrls: ['./output-property-binding.component.scss']
})
export class OutputPropertyBindingComponent implements OnInit {

  stockSymbol: string;
  price: number;

  constructor() { }

  ngOnInit(): void {
  }

  priceQuoteHandler(event: IPriceQuote) {
    this.stockSymbol = event.stockSymbol;
    this.price = event.lastPrice;
  }

}
