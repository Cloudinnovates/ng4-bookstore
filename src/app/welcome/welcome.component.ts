import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

import { CategoryService } from '../category.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    constructor(private categoryService: CategoryService) {

    }

    sliderCategories: Category[];
    cardCategories: Category[];

    ngOnInit() {
      this.categoryService.getCategories().then((categories: Category[]) => {
        this.cardCategories = categories;
        this.sliderCategories = [
            categories[5],
            categories[4],
            categories[6]
        ];
      });
    }

    selectCategory(category: Category) {
      console.log('Selected category', category.title);
    }

}
