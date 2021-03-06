import { Data } from './../../services/data.service';
import { EmailService } from './../../services/email.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verifyEmail.component.html',
  styleUrls: ['./verifyEmail.component.css'],
})

export class VerifyEmailComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj: any;
  public timer: any;
  public showProgress=false;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private emailservice: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      role: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  // on create account submit
  onVerifyLink() {
    this.showProgress=true;
     this.infoobj = {
        'title': this.userForm.value.role,
        'username': this.userForm.value.email,
        'subject': 'Email verification'
      };
    this.emailservice.sendEmail(this.infoobj).subscribe(resJsonData => {
      if(resJsonData.success){
      this.data.openSnackBar(resJsonData.msg, 'Please Check your MAIL');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
    }
    else{

         this.data.openSnackBar(resJsonData.msg, 'OK');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
    }
    },
      error => {
        this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
         this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
      });
  }

  // go back to login
  onBack() {
    this.router.navigate(['/login']);
  }
}
