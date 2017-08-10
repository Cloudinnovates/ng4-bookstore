import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../models/category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
  }

  filterBooks(category: Category) {
      this.router.navigate(['/books'], {queryParams: { category: category.id }});
  }

}
