import { AuthenticationService } from './../../services/authentication.service';
import { Data } from './../../services/data.service';
import { JsonDataService } from './../../services/json-data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Headers } from '@angular/http';
import { Location } from '@angular/common';

// declare var $: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './passwordReset.component.html',
  styleUrls: ['./passwordReset.component.css']
})

export class PasswordResetComponent implements OnInit {

  public jsonObj = {};
  public languages: any = [];
  public userForm: FormGroup;
  public emailId = '';
  public passwordMatchWarning = '';
  public reset: any;
  private token: any;
  public showProgress = false;
  public enableOldPassword: any = false;
  public oldPasswordWarning:any;


  constructor( @Inject(FormBuilder) fb: FormBuilder, private backLocation: Location, private Data: Data, private AuthenticationService: AuthenticationService, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router) {
    // register candidate form
    this.userForm = fb.group({
      email: [{ value: '', disabled: true }],
      oldPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
      conPassword: ['', [Validators.required, Validators.pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.reset = params['reset']);
    if (this.reset === 'reset') {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.userForm.patchValue({
        'email': currentUser.username
      });
      this.enableOldPassword = true;
    }
    else {
      this.token = this.route.snapshot.queryParams['confirm']
      let email;
      this.AuthenticationService.getEmail(this.token).subscribe((res) => {
        email = res.data['username'];
        this.userForm.patchValue({
          'email': email
        });
      })
    }
  }

  getdata(jsonData: any) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
  }

  oldPasswordValue(pass:any){
    this.AuthenticationService.checkOldPassword(pass,this.userForm.get('email').value).subscribe((res:any) => {
      if(res.success){
         this.oldPasswordWarning = '';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = false;
    }
    else {
      this.oldPasswordWarning = 'Wrong old password';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;

    }
    },err => {
       this.oldPasswordWarning = 'Wrong old password';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    });
          (<HTMLInputElement>document.getElementById('resetBtn')).disabled = false;

  }

  conPasswordValue(conPass: any, pass: any) {
    if (pass !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    } else {
      this.passwordMatchWarning = '';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = false;

    }
  }

  // on form submit
  onSubmit() {
    if(this.userForm.get('password').value.length >0 && this.userForm.get('conPassword').value.length >0)
    {
    this.showProgress = true;
    if (this.reset === 'reset') {
      this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(
        res => {
          if (res.success) {
            this.showProgress = false;
            this.router.navigate(['/home']);
            this.Data.openSnackBar(res.msg, 'OK');
          }
          else {
            this.showProgress = false;
            this.Data.openSnackBar(res.msg, 'OK');
          }
        },err => {
          this.showProgress = false;
          this.Data.openSnackBar("Technical error Try later", 'OK');
        }
      );
    }
    else {
      this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(
        res => {
          if (res.success) {
            this.router.navigate(['/login']);
            this.Data.openSnackBar(res.msg, 'OK');
          }
          else {
            this.Data.openSnackBar(res.msg, 'OK');
            this.router.navigate(['/login']);
          }
        },err => {
          this.showProgress = false;
          this.Data.openSnackBar("Technical error Try later", 'OK');
        }
      );
    }
  }
  }

  // on back button
  onBack() {
    this.backLocation.back();
  }
}