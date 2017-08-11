import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Navigation } from '../models/navigation';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'NG4 Bookstore';

  constructor(public authenticationService: AuthenticationService, private router: Router) {

  }

  logOut() {
    this.authenticationService.signOut();
    this.router.navigateByUrl('/login');
  }

  navigationItems: Navigation[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Books', active: false},
    {href: '#', label: 'Checkout', active: false},
    {href: '#', label: 'Logout', active: false}
  ];

}
