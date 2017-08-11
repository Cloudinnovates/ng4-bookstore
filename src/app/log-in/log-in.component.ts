import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    submitted: boolean = false;
    errorMessage = '';

  constructor(private authService: AuthenticationService,
                                  private router: Router,
                                  fb: FormBuilder) {
              this.form = fb.group({
                  'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
                  'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
              });

              this.email = this.form.controls['email'];
              this.password = this.form.controls['password'];
  }

  onSubmit(values: any): void {
    this.submitted = true;
    this.authService.signIn(values.email, values.password)
                    .then(() => this.postSignIn())
                    .catch((error) => {
                      this.errorMessage = 'Username and/or Password invalid';
                      this.submitted = false;
                    });
  }
private postSignIn() {
  this.router.navigate(['welcome']);
}


}
