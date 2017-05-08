import { Data } from './../../services/data.service';
import { AuthenticationService } from './../../services/authentication.service';
import { JsonDataService } from './../../services/json-data.service';
import { EmailService } from './../../services/email.service';

import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { PlacementRegisterService } from '../../services/placement-register.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
  providers: [PlacementRegisterService]
})
export class AdminRegistrationComponent implements OnInit {
  // form name
  public userForm: FormGroup;
  public showProgress = false;
  // Title of the form which maybe coordinato or supervisor.it should be dynamic

  private title: string;
  disabled: string = 'false';
  hiddenParticularRole: any;
  hiddenRole: any;
  public pincodeLocation: any;
  public areaList: any = [];
  emailDisable: any = false;
  public createdBy: any;
  public district: any;
  public state: any;
  public landmark: any;
  public createdUser: any;


  // Dropdown values.Should be data driven
  roles: any;
  professions: any;
  placementCenters: any;
  languages: any;

  minDate: Date = null;
  maxDate: Date = null;

  ngOnInit() {

    let today: Date = new Date();
    this.maxDate = new Date(today);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 15);
    this.JsonDataService.getPlacementCenter().subscribe(resJsonData => this.placementCenters = resJsonData);
    this.JsonDataService.getRoles().subscribe(resJsonData => this.roles = resJsonData);

    this.JsonDataService.getJsonData().subscribe(resJsonData => this.languages = resJsonData);

    this.JsonDataService.getProfession().subscribe(resJsonData => this.professions = resJsonData);

    this.createdUser = this.authenticationService.getCreatedBy()
    if (this.createdUser) {
      this.title = 'Admin';
      this.disabled = 'false';
      this.hiddenRole = false;
      this.hiddenParticularRole = true;
    }
    else {
      this.PlacementRegisterService.verifyToken(this.route.snapshot.queryParams['confirm']).subscribe(res => {
        if (res.msg !== 'Session Expired') {
          if (res.data.username) {
            this.userForm.patchValue({
              'emailControl': res.data.username
            })
            this.emailDisable = true;
            this.title = res.data.title;
            if (this.title.toLowerCase() === 'coordinator') {
              this.userForm.patchValue({
                roleControl: 'Coordinator'
              })
              this.hiddenRole = true;
              this.hiddenParticularRole = false;
              this.disabled = 'true';
            }
            else if (this.title.toLowerCase() === 'supervisor') {
              this.userForm.patchValue({
                roleControl: 'Supervisor'
              })
              this.hiddenRole = true;
              this.hiddenParticularRole = false;

              this.disabled = 'true';
            }
            else if (this.title.toLowerCase() === 'admin') {
              this.title = 'Admin';
              this.disabled = 'false';
              this.hiddenRole = false;
              this.hiddenParticularRole = true;

            }
            this.emailService.verifyEmail({ username: this.userForm.get('emailControl').value }).subscribe(resJsonData => {

            },
              error => {
                this.data.openSnackBar('Already Registered', 'Please Login');
                this.router.navigate(['/login']);
              });
          }
        }

        else {

          this.router.navigate(['/login']);
          this.data.openSnackBar(res.msg['msg'], 'OK');

        }
      },
        (err) => {
          this.router.navigate(['/login']);
          this.data.openSnackBar('Session Expired', 'OK');
        })

    }

  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, private authenticationService: AuthenticationService, private data: Data, private JsonDataService: JsonDataService, private emailService: EmailService, private PlacementRegisterService: PlacementRegisterService, private route: ActivatedRoute,
    private router: Router, ) {
    // building the form using FormBuilder and FormGroup
    this.userForm = fb.group({
      nameControl: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]{2,}')]],
      firstNameControl: ['', [Validators.required, Validators.pattern('[A-Za-z ]{2,}')]],
      lastNameControl: ['', [Validators.pattern('[A-Za-z ]{1,}')]],
      genderControl: ['', Validators.required],
      dobControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      aadharControl: ['', [Validators.pattern(/^\d{12}$/)]],
      passwordControl: ['', [Validators.required,this.passwordValidator()]],
      confirmPasswordControl: ['', [Validators.required, this.matchPassword()]],
      mobileControl: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      roleControl: ['', Validators.required],
      professionControl: ['', Validators.required],
      pincodeControl: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      locationControl: ['', Validators.required],
      placementControl: ['', Validators.required],
      languageControl: ['', Validators.required]
    });
  }

  // password validation which is calling from form building of passwordControl
  passwordValidator(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('confirmPasswordControl').value) {
        if (this.userForm.get('passwordControl').value === this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }


  }

  // password validation which is calling from form building of confirmPasswordControl
  matchPassword(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('passwordControl').value) {
        if (this.userForm.get('passwordControl').value === this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }
  }

  // user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
  getPincode() {
    if (this.userForm.get('pincodeControl').value.length === 6 && this.userForm.get('pincodeControl').valid) {
      this.JsonDataService.getPincode(this.userForm.get('pincodeControl').value).subscribe(
        resPincodeData => [this.pincodeLocation = resPincodeData.records, this.getPincodeLocation()]);
    }
    else {
      this.areaList = [];
      this.userForm.patchValue({
        'locationControl': ''
      })
    }
  }

  // get pincode locations after checking pincode
  getPincodeLocation() {
    this.userForm.value.locationControl = '';
    this.areaList = [];
    this.pincodeLocation.forEach((element: any) => {
      this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
    });
    if (this.areaList.length === 0) {
      this.data.openSnackBar('No Location Found', 'Please Try again');
      // this.areaList.push('Area Not Found');
    } else {
      this.data.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
    }
  }

  save(userdata: any): boolean {
    this.showProgress = true;
    if (this.createdUser) {
      this.createdBy = this.createdUser;
    }
    else {
      this.createdBy = userdata.get('emailControl').value;
    }
    this.landmark = userdata.get('locationControl').value.split(',')[0];
    this.district = userdata.get('locationControl').value.split(',')[1];
    this.state = userdata.get('locationControl').value.split(',')[2];
    let userData = {
      profileData: {
        summary: {
          summaryText: ''
        },
        personalInfo: {
          name: userdata.get('nameControl').value,
          fname: userdata.get('firstNameControl').value, lname: userdata.get('lastNameControl').value,
          dob: userdata.get('dobControl').value,
          gender: userdata.get('genderControl').value, email: userdata.get('emailControl').value,
          contact: {
            I: userdata.get('mobileControl').value
          },
          role: userdata.get('roleControl').value,
          address: {
            address1: '',
            address2: '',
            pincode: userdata.get('pincodeControl').value,
            district: this.district,
            landmark: this.landmark,
            state: this.state
          },
          identity: [{ idType: "Aadhaar", value: userdata.get('aadharControl').value }],
          language: userdata.get('languageControl').value,
        },
        profession: userdata.get('professionControl').value,
        centerCode: userdata.get('placementControl').value,
        createdBy: this.createdBy,
        username: userdata.get('emailControl').value, password: userdata.get('passwordControl').value,

      },
      userCredentialsData: {
        username: userdata.get('emailControl').value, password: userdata.get('passwordControl').value,
        role: userdata.get('roleControl').value,

      }
    };



    this.PlacementRegisterService.add(userData).subscribe((resJsonData: any) => {
      if (resJsonData['success'] === true) {
        this.userForm.reset();
        this.router.navigate(['/login']);
        this.data.openSnackBar(resJsonData['msg'], 'OK');
        return true;
      }
      else {
        this.showProgress = false;
        this.data.openSnackBar(resJsonData['msg'], 'OK');
      }
    },
      (error: any) => {
        this.showProgress = false;
        this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
      })

    return true;
  }

}

