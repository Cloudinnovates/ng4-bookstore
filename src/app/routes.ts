import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuardService } from './authentication-guard.service';


import { LogInComponent } from './log-in/log-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';


const routes: Routes = [
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: 'login', component: LogInComponent },
        {path: 'welcome', component: WelcomeComponent, canActivate: [AuthenticationGuardService] },
        {path: 'books', component: BookListComponent, canActivate: [AuthenticationGuardService] },
        {path: 'book/:id', component: BookViewComponent, canActivate: [AuthenticationGuardService] },
        {path: 'cart', component: CartViewComponent, canActivate: [AuthenticationGuardService] },
        {path: 'checkout', component: CheckoutViewComponent, canActivate: [AuthenticationGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
