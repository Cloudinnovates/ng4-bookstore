import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAuthState } from 'angularfire2';

import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authenticationService.fbAuth.map((authState: FirebaseAuthState) => {
            if (authState) {
              return true;
            } else {
              this.router.navigateByUrl('/login');
              return false;
            }
    }).first();
  }
}
