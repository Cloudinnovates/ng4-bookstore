import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthenticationService {
    private authenticationState: FirebaseAuthState = null;

  constructor(public fbAuth: FirebaseAuth) {
      fbAuth.subscribe((state: FirebaseAuthState) => {
        this.authenticationState = state;
      });
   }

   get authenticated(): boolean {
     return this.authenticationState !== null;
   }

   get uid(): string {
     return this.authenticated ? this.authenticationState.uid : '';
   }

   signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
      return this.fbAuth.login({
        email: email,
        password: password
      }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      });
   }
   signOut(): void {
     this.fbAuth.logout();
   }
}
