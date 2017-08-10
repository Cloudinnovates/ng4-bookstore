import { Component } from '@angular/core';
import { Category } from '../models/category';

import { CategoryService } from '../category.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private categoryService: CategoryService) {

  }

  sliderCategories: Category[] = [this.categoryService.getCategory('2'), this.categoryService.getCategory('3'),
    this.categoryService.getCategory('1')];

  cardCategories: Category[] = this.categoryService.getCategories();

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }

}
