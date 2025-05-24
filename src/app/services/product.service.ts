import { Injectable } from '@angular/core';
import Products from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Products; 

  constructor() {
      this.product = {
      name: "Computadora",
      price: 500,
      isForSale: true,
    }
  }

  setProductName(name: string): void{
    this.product.name = name;
  }
}
