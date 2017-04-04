import { EmailService } from './../../services/email.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Data } from './../../services/data.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css'],
  providers: []

})
export class ForgotPasswordComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj: any;
  private postobject: any;
  public candidates: any;
  public timer: any;
  public emailId: any = '';
  public showProgress = false;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private emailservice: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router, private emailService: EmailService) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    });
  }

  ngOnInit() {
  }

  onResetLink() {
    this.showProgress = true;
    this.infoobj = {
      'title': '',
      'username': this.userForm.value.email,
      'subject': 'Password Reset',
    };
    this.emailService.sendResetPasswordEmail(this.infoobj).subscribe(resEmailData => {
      this.data.openSnackBar(resEmailData.msg, 'ok'),
        this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
    }, error => {
      this.showProgress = false;
      this.data.openSnackBar('User Doesn\'t exist', 'ok');
    });

  }
  onBack() {
    this.router.navigate(['/login']);

  }
}