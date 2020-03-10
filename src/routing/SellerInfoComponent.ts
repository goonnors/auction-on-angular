import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seller',
  template: `
    <h2>The seller of this product is Mary Lou (98%)</h2>
    <p>The SellerInfoComponent got the seller id {{ sellerId }}</p>
  `,
  styles: [':host { background: yellow }']
})
export class SellerInfoComponent {
  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.params.id;
  }
}
