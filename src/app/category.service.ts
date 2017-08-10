import { Injectable } from '@angular/core';
import { Category } from './models/category';

@Injectable()
export class CategoryService {

  categories: Category[] = [
  { id: '6', title: 'Angular 1', imageLarge: './assets/imgs/ng1L.jpg', imageSmall: './assets/imgs/ng1S.png', description: 'SUPERHEROIC JavaScript MV* Framework: Controllers, Directives, Services, Scope, Data Binding, Dependency Injection, Templates.' },
  { id: '5', title: 'Angular 2', imageLarge: './assets/imgs/ng2L.png', imageSmall: './assets/imgs/ng2S.jpg', description: 'One Framework. Mobile & desktop. Progressive Web Apps, Native, Desktop, Code Generation, Universal, Code Splitting, Components, Modules, Services.' },
  { id: '4', title: 'Angular 4', imageLarge: './assets/imgs/ng4L.jpg', imageSmall: './assets/imgs/ng4S.png', description: 'The newest version of Angular. Templates, Angular CLI, IDEs, Testing, Animations, Accessibility, Components, Modules, Templates, Metadata, Data Binding.' },
  { id: '3', title: 'JavaScript', imageLarge: 'http://placehold.it/1110x480', imageSmall: './assets/imgs/js1S.png', description: 'Scoping, Arrow Functions, Extended Parameter Handling, Template Literals, Enhanced Regular Expressions and Object Properties, Destructuring, Modules, Classes, Symbol, Iterators, Generators, Map, Typed Arrays.' },
  { id: '2', title: 'HTML5', imageLarge: 'http://placehold.it/1110x480', imageSmall: './assets/imgs/html51S.jpg', description: 'New Semantic/Structural Elements, New Form Elements, New Input Types, New Attribute Syntax, New Graphics, New Media Elements, Video, Audio, Canvas, SVG, Date, Email, Number, Search, AutoComplete, Summary, Progress.' },
  { id: '1', title: 'CSS3', imageLarge: 'http://placehold.it/1110x480', imageSmall: './assets/imgs/css31S.png', description: 'Media Queries, Selectors Level 3, Grid Template Layout, Aural Style Sheets, Backrgrounds and Borders, Basic User Interface, Extended Box Model, Marquee, Cascading, Inheritance, Color, Fonts, Transforms, Transitions, Animations.' },
  ];

  getCategories() {
    return this.categories;
  }

  getCategory(id: string): Category {
              for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].id === id) {
                  return this.categories[i];
                }
              }
              throw new CategoryNotFoundException;
  }
}
class CategoryNotFoundException extends Error {
              constructor(message?: string) {
                super(message);
              }
}
