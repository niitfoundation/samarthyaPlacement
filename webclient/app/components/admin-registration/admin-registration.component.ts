import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { PlacementRegisterService } from '../../services/placement-register.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { JsonDataService } from 'app/services/json-data.service'
import { Data } from 'app/services/data.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
  providers: [PlacementRegisterService]
})
export class AdminRegistrationComponent implements OnInit {

  //Title of the form which maybe coordinato or supervisor.it should be dynamic
  
  private title: string;
  disabled: string = "false";
  hiddenParticularRole: any;
  hiddenRole: any;
  public pincodeLocation: any;
  public areaList = [];
  emailDisable: any = false;


  ngOnInit() {
    if (this.route.snapshot.queryParams['email']) {
      this.userForm.patchValue({
        'emailControl': this.route.snapshot.queryParams['email']
      })
      this.emailDisable = true;
    }
    
    this.route.params.subscribe(params => this.title = params['title']);
    if (this.title == 'Coordinator') {
      this.userForm.patchValue({
        roleControl: "Coordinator"
      })
      this.hiddenRole = true;
      this.hiddenParticularRole = false;
      this.disabled = "true";
    }
    else if (this.title == 'Supervisor') {
      this.userForm.patchValue({
        roleControl: "Supervisor"
      })
      this.hiddenRole = true;
      this.hiddenParticularRole = false;

      this.disabled = "true";
    }
    else if (this.title == 'Admin') {
      this.title = "Admin";
      this.disabled = "false";
      this.hiddenRole = false;
      this.hiddenParticularRole = true;

    }
  }


  //Dropdown values.Should be data driven
  roles: any = ['Admin', 'Coorinator', 'Supervisor'];
  professions = ['FullStackDeveloper', 'BPO'];
  placementCenters = ['Pune', 'Bangalore', 'Chennai'];
  languages = ['English', 'Hindi', 'Tamizh'];

  //form name
  public userForm: FormGroup;


  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private JsonDataService: JsonDataService, private PlacementRegisterService: PlacementRegisterService, private route: ActivatedRoute,
    private router: Router, ) {
    //building the form using FormBuilder and FormGroup
    this.userForm = fb.group({
      firstNameControl: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
      lastNameControl: ['', [Validators.pattern('[A-Za-z ]{1,}')]],
      genderControl: ['', Validators.required],
      registrationControl: [''],
      emailControl: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      aadharControl: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      passwordControl: ['', [Validators.required]],
      confirmPasswordControl: ['', [Validators.required, this.matchPassword()]],
      mobileControl: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      roleControl: ['', Validators.required],
      professionControl: ['', Validators.required],
      pincodeControl: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      locationControl: ['', Validators.required],
      placementControl: ['', Validators.required],
      languageControl: ['', Validators.required],
    });
  }

  //password validation which is calling from form building of passwordControl
  passwordValidator(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('confirmPasswordControl').value) {
        if (this.userForm.get('passwordControl').value == this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }


  }

  //password validation which is calling from form building of confirmPasswordControl
  matchPassword(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('passwordControl').value) {
        if (this.userForm.get('passwordControl').value == this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }
  }

  //user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
  getPincode() {
    if (this.userForm.get('pincodeControl').value.length == 6 && this.userForm.get('pincodeControl').valid) {
      this.JsonDataService.getPincode(this.userForm.get('pincodeControl').value).subscribe(
        resPincodeData => [this.pincodeLocation = resPincodeData, this.getPincodeLocation()]);
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
    this.pincodeLocation.forEach(element => {
      this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
    });
    if (this.areaList.length === 0) {
      this.data.openSnackBar('No Location Found', 'Please Try again');
      // this.areaList.push('Area Not Found');
    } else {
      this.data.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
    }
  }

  //user choose the location by pincode which is calling from html pincode input and it should set location to the entered pincode and close the dialog
  close(dialog: any) {
    this.getPincode();
    dialog.close();
  }
  //after submitting the form,it should executed and call service to add the data to json
  save(userdata): boolean {
    let userData = {
      FirstName: userdata.get('firstNameControl').value, LastName: userdata.get('lastNameControl').value,
      Gender: userdata.get('genderControl').value, Email: userdata.get('emailControl').value,
      MobileNumber: userdata.get('mobileControl').value, Role: userdata.get('roleControl').value,
      Profession: userdata.get('professionControl').value,
      Location: userdata.get('locationControl').value,
      PlacementCenter: userdata.get('placementControl').value,
      Language: userdata.get('languageControl').value
    };
    if(this.userForm.value.aadharControl){
      userData['AadharNumber']=this.userForm.value.aadharControl;
    }
    if(this.userForm.value.registrationControl){
      userData['RegistrationID']=this.userForm.value.registrationControl;
    }
        let userCredentialsData = {
      Email: userdata.get('emailControl').value, Password: userdata.get('passwordControl').value,
    };
    this.PlacementRegisterService.add(userData,userCredentialsData).subscribe(resJsonData => {
      console.log(resJsonData);
      if (resJsonData['success'] == true) {
        this.userForm.reset();
        this.router.navigate(['/login']);
        this.data.openSnackBar("Registered successfully", "You can login");
        return true;
      }
      else {
        this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
      }
    },
      error => {
        this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
      })

    return true;
  }

}

