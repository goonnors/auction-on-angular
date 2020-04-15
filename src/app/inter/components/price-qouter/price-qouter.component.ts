import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPriceQuote} from '../../IPriceQuote';
import {IStock} from '../IStock';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-qouter.component.html',
  styleUrls: ['./price-qouter.component.scss']
})
export class PriceQouterComponent implements OnInit {
  @Output() lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();
  @Output() buy: EventEmitter <IStock> = new EventEmitter();

  stockSymbol = 'IBM';
  price: number = 100 * Math.random();

  constructor() {
    setInterval(() => {
      const priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100 * Math.random()
      };

      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 3000);
  }

  ngOnInit(): void {
  }

  buyStocks(): void {
    const stockToBuy: IStock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.price
    };
    this.buy.emit(stockToBuy);
  }
}
