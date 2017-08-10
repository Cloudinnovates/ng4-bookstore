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
            categories[1],
            categories[2],
            categories[3]
        ];
      });
    }

    selectCategory(category: Category) {
      console.log('Selected category', category.title);
    }

}
