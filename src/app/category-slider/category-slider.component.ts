import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {
  @Input() category: Category;
  @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

  browse() {
    this.select.emit(this.category);
  }


}
