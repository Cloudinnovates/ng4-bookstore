import { Book } from './books';

export class CartItem {
  book: Book;
  count: number;
  amount: number;
}

export class Cart {
  count: number = 0;
  amount: number = 0;
  items: CartItem[] = [];
}
