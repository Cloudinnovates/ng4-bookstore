import { Component } from '@angular/core';
import { Navigation } from '../models/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'NG4 Bookstore';

  navigationItems: Navigation[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Books', active: false},
    {href: '#', label: 'Checkout', active: false},
    {href: '#', label: 'Logout', active: false}
  ];

}
