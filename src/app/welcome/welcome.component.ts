import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private categoryService: CategoryService) {}

  sliderCategories: Category[];
  cardCategories: Observable<Category[]>;

  ngOnInit(): void {
    this.cardCategories = this.categoryService.getCategories();
    this.cardCategories.subscribe((categories: Category[]) => {
      this.sliderCategories = [
        categories[0],
        categories[1],
        categories[2]
      ];
    });
  }

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }

}
