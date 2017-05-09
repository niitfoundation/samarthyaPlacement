import { JsonDataService } from './../../services/json-data.service';
import { EmailService } from './../../services/email.service';

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router'
import { AuthenticationService } from './../../services/authentication.service';
import { Data } from '../../services/data.service';
import { Common } from '../../model/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  public showProgress = false;
  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private viewContainerRef: ViewContainerRef, private router: Router, private route: ActivatedRoute,
    private authenticationService: AuthenticationService, private data: Data) {

    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.@!$*&]{6,}')]]
    });
  }

  public returnUrl: String;

  ngOnInit() {
     if (localStorage.getItem('currentUser')) {
      this.redirect();
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    if (this.route.snapshot.queryParams['message'])
      this.data.openSnackBar(this.route.snapshot.queryParams['message'], 'ok');

  }
  public result: any;

  public forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }
  public verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }
  login() {
    this.showProgress = true;
    let value = this.userForm.value;

    this.authenticationService.login(value['email'], value['password'])
      .subscribe(
      res => {
        if (res['role'] == 'candidate') {
          this.data.openSnackBar('Not authorised', 'Try later');
          this.showProgress = false;
          this.router.navigate(['/login']);
        }
        else {
          this.data.openSnackBar('Welcome ', value['email']);
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.showProgress = false;
        this.data.openSnackBar('Invalid username or password', 'Try again');
        this.router.navigate(['/login']);
      });

  }



  redirect() {
    this.router.navigate(['/home']);
  }
}