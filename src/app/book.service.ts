import { Injectable } from '@angular/core';
import { Book } from './models/books';

@Injectable()
export class BookService {
  private books: Book[] = [
    // Angular 1
    { id: '13', categoryId: '1', title: 'AngularJS: Up and Running: Enhanced Productivity with Structured Web Apps', price: 25.5, isSpecial: false, imageLarge: './assets/imgs/ng1book1L.png', imageSmall: './assets/imgs/ng1book1S.jpg', description: 'This is one of the AngularJS best books available in the market. This AngularJS book is basically a practical guide that teaches the step-by-step process, from basic to advance, of using the meta-framework.' },
    { id: '14', categoryId: '1', title: 'AngularJS Web Application Development Cookbook', price: 15.5, isSpecial: false, imageLarge: './assets/imgs/ng1book2L.png', imageSmall: './assets/imgs/ng1book2S.jpg', description: 'This AngularJS book contains more than 90 hands-on recipes that help you to architect performant applications and also offers best practices in AngularJS. Learn about controllers, directives, angular goodness.' },
    { id: '15', categoryId: '1', title: 'AngularJS in Action', price: 18.80, isSpecial: false, imageLarge: './assets/imgs/ng1book3L.jpg', imageSmall: './assets/imgs/ng1book3S.jpg', description: 'AngularJS in Action covers everything you need to know to get started with the AngularJS framework. As you read, you\'ll explore all the individual components of the framework and learn how to customize and extend them.' },
    { id: '16', categoryId: '1', title: 'Learning AngularJS', price: 13.20, isSpecial: false, imageLarge: './assets/imgs/ng1book4L.jpg', imageSmall: './assets/imgs/ng1book4S.jpg', description: 'AngularJS is regarded as one of the innovative and most exciting newly invented technologies for web development. This requires good knowledge of web application development and Learning AngularJS is the right resource to learn the AngularJS programming from the scratch.' },
    { id: '17', categoryId: '1', title: 'AngularJS UI Development', price: 24.25, isSpecial: false, imageLarge: './assets/imgs/ng1book5L.jpg', imageSmall: './assets/imgs/ng1book5S.jpeg', description: 'This is one of the best AngularJS books that will help you expanding your horizons by teaching you the skills that are required while designing, customizing, building and delivering the real-world applications built on AngularJS. Learn more about directives, controllers, templates ...' },
    // Angular 2
    { id: '9', categoryId: '2', title: 'Angular 2 Cookbook', price: 13.45, isSpecial: false, imageLarge: './assets/imgs/ng2book1L.png', imageSmall: './assets/imgs/ng2book1S.jpg', description: 'Angular 2 introduces an entirely new way to build applications. It wholly embraces all the newest concepts that are built into the next generation of browsers, and it cuts away all the fat and bloat from Angular 1. This awesome Angular 2 Platform create SPA\'s ...' },
    { id: '10', categoryId: '2', title: 'ng-book 2', price: 14.55, isSpecial: false, imageLarge: './assets/imgs/ng2book2L.png', imageSmall: './assets/imgs/ng2book2S.png', description: 'ng-book is designed to teach you step-by-step how to create serious Angular apps: from empty-folder to deploymen. Each chapter covers a topic and we provide full code examples for every project in the book. Learn more about Modules, Templates, Data Binding, Dependency Injection.' },
    { id: '11', categoryId: '2', title: 'Angular 2 Development with TypeScript', price: 17.80, isSpecial: false, imageLarge: './assets/imgs/ng2book3L.svg', imageSmall: './assets/imgs/ng2book3S.jpg', description: 'Whether you\'re building web clients or full-featured SPAs, using the Angular 2 web framework is a liberating experience. Its declarative style makes it easy to define and add features without a lot of manually written boilerplate. Learn Angular CLI developemnt with Webpack, AOT.' },
    { id: '12', categoryId: '2', title: 'Angular 2 A Practical Introduction', price: 12.70, isSpecial: false, imageLarge: './assets/imgs/ng2book4L.jpg', imageSmall: './assets/imgs/ng2book4S.jpg', description: 'This books guides you through all new aspects of Angular 2. You\'ll get a real-world understanding of how Angular 2 can be applied in your own web and mobile applications. Learn more about progressive web apps with Angular, Mobile and desktop applications with this great platform.' },
    // Angular 4
    { id: '6', categoryId: '3', title: 'ng-book: The Complete Book on Angular 4', price: 15.60, isSpecial: false, imageLarge: './assets/imgs/ng4book1L.png', imageSmall: './assets/imgs/ng4book1S.png', description: 'We\'re committed to keeping ng-book the best resource for learning and using Angular 4. We personally respond to requests for content and we regularly release updates. Learn Angular 4 best practices, such as: testing, code organization, and how to structure performance...'},
    { id: '7', categoryId: '3', title: 'Getting Started with Angular 4', price: 14.85, isSpecial: false, imageLarge: './assets/imgs/ng4book2L.jpg', imageSmall: './assets/imgs/ng4book2S.png', description: 'Get familiar with the improvements to directives, change detection, dependency injection, router, and more Understand Angular\'s new component-based architecture Start using TypeScript to supercharge your Angular applications.' },
    { id: '8', categoryId: '3', title: 'Angular 4 Services', price: 19.20, isSpecial: false, imageLarge: './assets/imgs/ng4book3L.jpg', imageSmall: './assets/imgs/ng4book3S.jpg', description: 'Design state-of-the-art applications with customized Angular services. Leverage the latest Angular and ES2016 features to create services. Integrate third-party libraries effectively and extend your app’s functionalities. Learn more about Components.' },
    // JavaScript
    { id: '4', categoryId: '4', title: 'You Don\'t Know JS', price: 17.7, isSpecial: false, imageLarge: './assets/imgs/jsbook1L.png', imageSmall: './assets/imgs/jsbook1S.jpg', description: 'But it will certainly help you gain a new appreciation and a deeper understanding of JavaScript. Kyle’s singular focus on deep diving into language features is a rare treasure that I imagine even the TC39 team could learn something from. Learn about scope, a set of rules to help JavaScript engines.' },
    { id: '5', categoryId: '4', title: 'Programming JavaScript Applications ', price: 12.35, isSpecial: false, imageLarge: './assets/imgs/jsbook2L.jpeg', imageSmall: './assets/imgs/jsbook2S.png', description: 'JavaScript is the most used programming language in the world. It has the largest open source package repository in the world (npm). Every type of software application uses JavaScript, including server code (Node.js), productivity apps, AAA 3d games, robots and IoT devices. Examine the anatomy ...' },
    // HTML5
    { id: '3', categoryId: '5', title: 'JavaScript and HTML5', price: 13.2, isSpecial: false, imageLarge: './assets/imgs/html5book1L.png', imageSmall: './assets/imgs/html5book1S.jpg', description: ' HTML5 and JavaScript are moving the Web into full adulthood. This insightful overview provides striking examples of how these technologies have teamed up to give the Web a truly open platform.' },
    // CSS3
    { id: '1', categoryId: '6', title: 'CSS3: The Missing Manual', price: 25.5, isSpecial: false, imageLarge: './assets/imgs/css3book2L.jpg', imageSmall: './assets/imgs/css3book2S.jpg', description: 'The exhaustive CSS3: The Missing Manual is a fantastic reference for cascading style sheets, whether you\'re a beginner or a pro. With a laser focus on coding the design of your site. Build web pages ...' },
    { id: '2', categoryId: '6', title: 'CSS3: The Definitive Guide', price: 15.5, isSpecial: false, imageLarge: './assets/imgs/css3book1L.jpg', imageSmall: './assets/imgs/css3book1S.png', description: 'Provides you with a comprehensive guide to CSS implementation, along with a thorough review of all aspects of CSS 2.1. Content positioning, lists generated content, table layout, paged media.' }
  ];

  getBooks(category?: string, search?: string) {
    if (category) {
      return this.books.filter((book: Book, idx: number, array: Book[]) => {
                   return book.categoryId === category;
                 });
    } else if (search) {
      let lowSearch = search.toLowerCase();
      return this.books.filter((book: Book, idx: number, array: Book[]) => {
         return book.title.toLowerCase().indexOf(lowSearch) !== -1;
       });
    } else {
      return this.books;
    }
}

  getBook(id: string){
    for (let i = 0; i < this.books.length; i++) {
     if (this.books[i].id === id) {
         return this.books[i];
       }
    }
 throw new BookNotFoundException(`Book ${id} not found`);
  }
}
class BookNotFoundException extends Error {
   constructor(message?: string) {
    super(message);
  }
 }
