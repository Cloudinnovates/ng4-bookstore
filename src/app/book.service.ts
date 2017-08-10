import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Book } from './models/books';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService {
  private booksUrl = 'app/books';

  constructor(private http: Http) {}

  getBooks(category?: string, search?: string): Observable<Book[]> {
    let url = this.booksUrl;
    if (category) {
      url += `/?categoryId=${category}`;
    } else if (search) {
      url += `/?title=${search}`;
    } else {
      return this.http.get(url).map((response: Response) =>  response.json().data as Book[])
                                .catch(this.handleError);
    }
  }

  getBook(id: string): Observable<Book> {
    return this.http.get(this.booksUrl + `/${id}`).map((response: Response) => response.json().data as Book)
                                                  .catch(this.handleError);
}

  private handleError(error: any): Observable<any> {
        let errorMessage = (error.message) ? error.message : 'Server Error';
        window.alert(`Error occurred: ${errorMessage}`);
        return Observable.throw(errorMessage);
}

}
