import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cart, CartItem } from '../models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  cart: Cart;
  form: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
          this.cart = this.cartService.cart;
   }

   ngOnInit() {
     this.form = this.fb.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', Validators.required],
       phone: ['', Validators.required],
       address: []
     });
   }

    submit() {
      alert('submitted');
      this.cartService.clearCart();
    }
}
