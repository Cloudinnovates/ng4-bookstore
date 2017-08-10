import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category: Category;
  //@Output() selected: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(private router: Router) {

  }

  filterBooks(category: Category) {
    this.router.navigate(['/books'], {queryParams: {category: category.id}});
  }

}
