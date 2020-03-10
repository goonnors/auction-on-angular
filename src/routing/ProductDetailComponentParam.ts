import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  template: `
    <div class="product">
      <h1 class="product">Product Details for Product: {{ productId }}</h1>
      <p>this.isProdEnvironment = {{ isProdEnvironment }}</p>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', 5678]">SellerInfo</a></p>
    </div>
  `,
  styles: ['.product { background: cyan }'],
})
export class ProductDetailComponentParam {
  productId: string;
  isProdEnvironment: string;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.params.id;
    this.isProdEnvironment = route.snapshot.data[0].isProd;
  }
}
