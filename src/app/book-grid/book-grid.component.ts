import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../models/books';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {
    books: any = [];

    constructor(private router: Router, private bookService: BookService, private cartService: CartService) {
      this.router.routerState.root.queryParams.subscribe(params => {
        let category: string = params['category'];
        let search: string = params['search'];
        let booksFound: Book[] = this.bookService.getBooks(category, search);
        this.books = this.transform(booksFound);
      });
    }

    ngOnInit() {
      //this.books = this.transform(getBooks());
    }

    transform(source: Book[]){
      let index = 0;
      let length = source.length;
      let books = [];
      while(length){
        let row: Book[] = [];
        if (length >= 3) {
          for(let i = 0; i < 3; i++){
            row.push(source[index++]);
          }
          books.push(row);
          length -= 3;
        } else {
          for (; length > 0; length--){
            row.push(source[index++]);
          }
          books.push(row);
        }
      }
      return books;
    }

    addToCart(book: Book) {
      this.cartService.addBook(book);
    }
}
