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

    sliderCategories: Category[] = [this.categoryService.getCategory('5'), this.categoryService.getCategory('4'),
                                    this.categoryService.getCategory('6')];

    cardCategories: Category[] = this.categoryService.getCategories();

    selectCategory(category: Category) {
      console.log('Selected category', category.title);
    }

}
