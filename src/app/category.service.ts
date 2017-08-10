import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Category } from './models/category';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
      private categoriesUrl = 'app/categories';
      private categories: Category[] = [];

    constructor(private http: Http) {}

  getCategories(): Promise<Category[]> {
      return this.http.get(this.categoriesUrl).toPromise()
        .then((response: Response) => {
        this.categories = response.json().data as Category[];
        return this.categories;
      }).catch(this.handleError);
  }

  getCategory(id: string): Category {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        return this.categories[i];
      }
    }
    return null;
  }

  private handleError(error: any): Promise<any> {
    window.alert(`Error occurred: ${error}`);
    return Promise.reject(error.message|| error);
  }
}
