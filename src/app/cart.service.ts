import { Injectable } from '@angular/core';

import { Book } from './models/books';
import { CartItem, Cart } from './models/cart';

@Injectable()
export class CartService {
    cart: Cart = new Cart();

    addBook(book: Book) {
      let item: CartItem = this.findItem(book.id);
      if (item) {
        item.count++;
        item.amount += book.price;
      } else {
        item = {
          book: book,
          count: 1,
          amount: book.price
        };
        this.cart.items.push(item);
      }
      this.cart.count++;
      this.cart.amount += book.price;
      return item;
    }
    removeBook(book: Book) {
      let item: CartItem = this.findItem(book.id);
      if (item) {
        item.count--;
        if (!item.count) {
          this.removeIt(item);
        }
        this.cart.count--;
        this.cart.amount -= book.price;
        item.amount -= book.price;
      }
      return item;
    }
    findItem(id: string) {
      for (let i = 0; i < this.cart.items.length; i++) {
        if (this.cart.items[i].book.id === id) {
          return this.cart.items[i];
        }
      }
      return null;
    }
    clearCart() {
      this.cart.items = [];
      this.cart.amount = 0;
      this.cart.count = 0;
    }

    private removeIt(item: CartItem) {
      let idx: number = this.cart.items.indexOf(item);
      if (idx !== -1) {
        this.cart.items.splice(idx, 1);
      }
    }
}
