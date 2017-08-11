import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Category } from './models/category';

@Injectable()
export class CategoryService {
  private categoriesUrl= 'categories';
  private categories: Category[] = [];

  constructor(private af: AngularFire ) {
  }

  getCategories(): Observable<Category[]> {
      return this.af.database.list(this.categoriesUrl).catch(this.handleError)
  }

  getCategory(id: string) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        return this.categories[i];
      }
    }
    return null;
  }

  private handleError(error: any): Observable<any> {
    let errorMessage = (error) ? error.message : 'Server Error';
    window.alert(`Error occurred: ${errorMessage}`);
    return Observable.throw(errorMessage);
  }
}
