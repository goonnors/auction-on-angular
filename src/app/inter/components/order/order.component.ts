import {Component, Input} from '@angular/core';
import {IStock} from '../IStock';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order.component.html',
  styles: [`:host {background: cyan;}`]
})
export class OrderComponent {
  message = 'Waiting for the orders...';
  private _stockSymbol: string;
  private _stock: IStock;

  @Input()
  quantity: number;

  @Input()
  set stockSymbol(value: string) {
    this._stockSymbol = value;
    if (this._stockSymbol !== undefined) {
      this.message = `Sending a Buy order to NASDAQ: ${this.stockSymbol}   ${this.quantity}`;
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }

  @Input()
  set stock(value: IStock) {
    if (value && value.bidPrice !== undefined) {
      this.message = `Placed order to buy ${this.quantity} shares of ${value.stockSymbol} as \$${value.bidPrice.toFixed(2)}`;
    }
  }

  get stock(): IStock {
    return this._stock;
  }
}
