import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {


  constructor(private router: Router) { }

  searchBooks(value: string){
    this.router.navigate(['/books'], {queryParams: {search: value }});
  }

}
