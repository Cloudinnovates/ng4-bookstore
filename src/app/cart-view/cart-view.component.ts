import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  update(value: number, item: CartItem) {
          let result = value - item.count;
          if (result > 0) {
            for (let i = 0; i < result; result++) {
              this.cartService.addBook(item.book);
            }
          } else if ( result < 0) {
            for (let i = 0; i < -result; i++) {
              this.cartService.removeBook(item.book);
            }
          }
          return value;
  }
}
