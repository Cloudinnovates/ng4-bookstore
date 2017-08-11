import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/books';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() books: Book[];
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();

  setClasses(book: Book) {
    return {
      'card-danger': book.isSpecial,
      'card-info': book.isSpecial
    };
  }

  buy(book: Book) {
    console.log('you bought ', book.title);
    this.addToCart.emit(book);
  }


}
