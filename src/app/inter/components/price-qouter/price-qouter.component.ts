import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPriceQuote} from '../../IPriceQuote';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-qouter.component.html',
  styleUrls: ['./price-qouter.component.scss']
})
export class PriceQouterComponent implements OnInit {
  @Output() lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();
  stockSymbol = 'IBM';
  price: number;

  constructor() {
    setInterval(() => {
      const priceQuote: IPriceQuote = {
        stockSymbol: this.stockSymbol,
        lastPrice: 100 * Math.random()
      };

      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit(): void {
  }

}
