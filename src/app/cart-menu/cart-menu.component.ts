import { Component } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent{

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = cartService.cart;
    }

  ngOnInit() {
  }

}
