import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';

import { AppRoutingModule } from './routes';

import { FooterComponent } from './footer/footer.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookGridComponent } from './book-grid/book-grid.component';

import { CategoryService } from './category.service';
import { BookService } from './book.service';
import { CartService } from './cart.service';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CategoryTitlePipe } from './category.pipe';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryCardComponent,
    CategorySliderComponent,
    WelcomeComponent,
    BookListComponent,
    FooterComponent,
    BookSearchComponent,
    CategoryListComponent,
    BookCardComponent,
    BookGridComponent,
    CartMenuComponent,
    BookViewComponent,
    CategoryTitlePipe,
    CartViewComponent,
    CheckoutViewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy},
              CategoryService, BookService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
