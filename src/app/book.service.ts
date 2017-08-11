import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Book } from './models/books';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService {
  private booksUrl = 'books';
  constructor(private af: AngularFire) {}
  getBooks(category?: string, search?: string): Observable<Book[]> {
    if (category || search) {
      let query= <any>{};
      if (category) {
        query.orderByChild = 'categoryId';
        query.equalTo = category;
      } else {
        query.orderByChild = 'title';
        query.startAt = search.toUpperCase();
        //query.endAt = search.toUpperCase();
        //query.endAt = query.startAt + '\uf8ff';
      }
      return this.af.database.list(this.booksUrl, {
        query: query
      })
      .catch(this.handleError);
    } else {
      return this.af.database.list(this.booksUrl);
      //return Observable.empty();
    }
}
  getBook(id: string): Observable<Book>{
        return this.af.database.object(this.booksUrl + `/${id}`).catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
      let errorMessage = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server Error';
      window.alert(`Error occurred: ${errorMessage}`);
      return Observable.throw(errorMessage);
    }
  }
