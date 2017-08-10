import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../models/category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().then((categories: Category[]) => this.categories = categories);
  }

  filterBooks(category: Category) {
      this.router.navigate(['/books'], {queryParams: { category: category.id }});
  }

}
