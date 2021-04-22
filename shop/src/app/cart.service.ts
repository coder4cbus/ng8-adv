import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs';

export class CartItem {
  product:Product
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userCart: CartItem[] = []
  public cartSubject = new Subject<CartItem[]>()

  constructor() { }

  addToCart(item: CartItem) {
    this.userCart.push(item)
    this.cartSubject.next(this.userCart)
  }
}
