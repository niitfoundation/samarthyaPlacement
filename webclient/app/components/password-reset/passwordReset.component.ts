import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmailService } from 'app/services/email.service';
import { Headers } from '@angular/http';
import { Data } from 'app/services/data.service';
import { AuthenticationService } from 'app/services/authentication.service'


// declare var $: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './passwordReset.component.html',
  styleUrls: ['./passwordReset.component.css']
})

export class PasswordResetComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public userForm: FormGroup;
  public emailId = '';
  public password = '';
  public passwordMatchWarning = '';



  constructor( @Inject(FormBuilder) fb: FormBuilder, private Data: Data, private AuthenticationService: AuthenticationService, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private emailService: EmailService) {

    // register candidate form
    this.userForm = fb.group({
      email: [{ value: '', disabled: true }],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
      conPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
    });
  }

  ngOnInit() {
    this.AuthenticationService.getPasswordResetToken(this.route.snapshot.queryParams['token'], this.route.snapshot.queryParams['email']).
      subscribe(
      res => {
        if (!res.authToken) {
          this.Data.openSnackBar("Token expired Do Password reset again", "ok");
          this.router.navigate(['/login']);
        }
      },
      error => {
        this.Data.openSnackBar("Error...Please Do Password reset again", "ok");
        this.router.navigate(['/login']);
      });
    this.userForm.patchValue({
      'email': this.route.snapshot.queryParams['email']
    })
  }

  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
  }

  // password confirm Validators
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass, pass) {
    if (pass !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    } else {
      this.passwordMatchWarning = '';
    }
  }

  // on form submit
  onSubmit() {
    alert('Password changed');
    this.router.navigate(['/login']);
    this.Data.openSnackBar('Password updated', 'OK');

  }

  // on back button
  onBack() {
    this.router.navigate(['/login']);
  }
}