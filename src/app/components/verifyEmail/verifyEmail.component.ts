import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'app/services/email.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import {Data} from 'app/services/data.service'

@Component({
  selector: 'app-verify-email',
  templateUrl: './verifyEmail.component.html',
  styleUrls: ['./verifyEmail.component.css'],
})

export class VerifyEmailComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj;
  private postobject;
  public candidates = [];
  public timer;

  constructor( @Inject(FormBuilder) fb: FormBuilder,private data:Data, private emailservice: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      role:['',[Validators.required]]
    });
  }

  ngOnInit() { }

 

  // verify user if already exist or not for registration
  verifyUserRegistration() {
      console.log(this.candidates)
    if (this.candidates.length === 0) {
        
      this.infoobj = {
        'title':this.userForm.value.role,
        'to': this.userForm.value.email,
        'subject': 'Email verification',
        'redirect': 'http://localhost:3002/register/Coordinator',
        'mailBody': "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='W3Schools.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'>";
      };
      this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
        error => [this.data.openSnackBar('mail sent succefully', 'Please Check your MAIL'),
        this.timer = setTimeout(() => this.router.navigate(['/login']), 500)], () => console.log('finished'));
    } else {
      this.data.openSnackBar('User already Exist', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
    }
  }

  // on create account submit
  onVerifyLink() {
    // console.log(this.userForm.value.email);
    this.emailservice.getEmail(this.userForm.value.email).subscribe(resJsonData => [
      this.candidates = resJsonData.data, this.verifyUserRegistration()],
      error => {
        this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
      });
  }

  // go back to login
  onBack() {
    this.router.navigate(['/login']);
  }
}
