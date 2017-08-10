import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route: ActivatedRoute, private bookService: BookService, private cartService: CartService) {
    }

    ngOnInit() {
      this.route.queryParams.subscribe((params: any) => {
              let category: string = params['category'];
              let search: string = params['search'];
              this.books = [];
              this.bookService.getBooks(category, search).then((books: Book[]) => {
                this.books = this.transform(books);
              });
      });
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
