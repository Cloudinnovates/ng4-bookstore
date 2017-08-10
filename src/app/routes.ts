import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';

const routes: Routes = [
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: 'welcome', component: WelcomeComponent },
        {path: 'books', component: BookListComponent },
        {path: 'book/:id', component: BookViewComponent },
        {path: 'cart', component: CartViewComponent },
        {path: 'checkout', component: CheckoutViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
