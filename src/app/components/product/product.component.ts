import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {
    productId: 1,
    productName: 'bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product3 = {
    productId: 2,
    productName: 'maşa',
    categoryId: 2,
    unitPrice: 6,
  };
  product2 = {
    productId: 3,
    productName: 'fincan',
    categoryId: 1,
    unitPrice: 489,
  };
  product4 = {
    productId: 4,
    productName: 'ızgara',
    categoryId: 2,
    unitPrice: 78,
  };
  product5 = {
    productId: 5,
    productName: 'tepsi',
    categoryId: 13,
    unitPrice: 55,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
