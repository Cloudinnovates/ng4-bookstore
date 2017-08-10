import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Book } from './models/books';

@Injectable()
export class BookService {
  private booksUrl = 'app/books';

  constructor(private http: Http) {}

  getBooks(category?: string, search?: string): Promise<Book[]> {
    let url = this.booksUrl;
    if (category) {
      url += `/?categoryId=${category}`;
    } else if (search) {
      url += `/?title=${search}`;
    } else {
      return this.http.get(url).toPromise()
                                .then((response: Response) =>  response.json().data as Book[])
                                .catch(this.handleError);
    }
  }

  getBook(id: string): Promise<Book> {
    return this.http.get(this.booksUrl + `/${id}`).toPromise()
                                                  .then((response: Response) => response.json().data as Book)
                                                  .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
        window.alert(`Error occured: ${error}`);
        return Promise.reject(error.message || error);
}

}
