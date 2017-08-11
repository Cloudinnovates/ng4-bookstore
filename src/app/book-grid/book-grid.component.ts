import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../models/books';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {
  books: Observable<Book[][]>;

  constructor(private route: ActivatedRoute, private bookService: BookService,
                              private cartService: CartService) {
  }
  ngOnInit(): void {
          this.route.queryParams.debounceTime(300).distinctUntilChanged().subscribe((params: any) => {
              let category: string = params['category'];
              let search: string = params['search'];
              this.books = this.bookService.getBooks(category, search).map(this.transform);
          });
  }

  transform(source: Book[]) {
    let index = 0;
    let length = source.length;
    let books = [];
    while (length) {
      let row: Book[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(source[index++]);
        }
        books.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
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
