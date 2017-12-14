import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Data } from '../../../services/data.service';
import {AuthenticationService} from '../../../services/authentication.service'

@Component({
  selector: 'placementHistory-form-render',
  templateUrl: './placementHistoryFormRender.component.html',
  styleUrls: ['./placementHistoryFormRender.component.css']
})

export class PlacementHistoryFormRender implements OnInit {
 public userForm: FormGroup;

  @Input()
  public placementHistoryData: any[];  
  
  @Input()
  public username: any;

  public jobRoles: any[] = this.getJobRoles();

  public locations: any[] = this.getLocations();
  
  public placementTypeData = [
    { name: 'Yes', value: 'niit coordinator' },
    { name: 'No', value: 'self' }
  ];
  
  
  public options = [
    { name: 'IS IN PROGRESS', value: 'is in progress' },
    { name: 'HAS JOINED', value: 'has joined' },
    { name: 'NOT JOINED', value: 'not joined' }
  ];
  public coordinatorNames : any[];

  constructor(private fb: FormBuilder, private http: Http, private router: Router, private data: Data, private authenticationService:AuthenticationService) {
  }
 
  minDate: Date = null;
  maxDate: Date = null

  ngOnInit(){
    this.coordinatorNames = this.fetchCoordinators();
    let today: Date = new Date();
    // this.minDate = new Date(today);
    // this.minDate.setMonth(this.minDate.getMonth() - 3);

    this.maxDate = new Date(today);
    this.maxDate.setFullYear(this.maxDate.getFullYear());

    if (this.placementHistoryData.length > 0) {
      this.userForm = this.fb.group({
        AllPlacementHistory: this.fb.array(this.initPlacementHistoryFormWithData())
      });
    } else {
      this.userForm = this.fb.group({
        AllPlacementHistory: this.fb.array([this.initPlacementHistoryForm()])
      });
    }
  }


  initPlacementHistoryFormWithData() {
    let placementHistoryEntries = this.placementHistoryData.map((placementHistory) => {
      return this.fb.group({
        workplace: [placementHistory.workplace, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        designation: [placementHistory.designation, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        jobRole: [placementHistory.jobRole, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        location: [placementHistory.location, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        from: [placementHistory.duration.start],
        till: [placementHistory.duration.end, [Validators.required]],
        salary: [placementHistory.salary], //Max six digits, a dot, max two digits after dot
        placementType: [placementHistory.placementType, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        placementStatus: [placementHistory.placementStatus],
        coordinatorName: [placementHistory.coordinatorName, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        coordinatorContact: [placementHistory.coordinatorContact], // contact number with +91 - India Code
        placementRemarks: [placementHistory.placementRemarks, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerName: [placementHistory.employerName, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerContact: [placementHistory.employerContact],
        employerFeedback: [placementHistory.employerFeedback, [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        iscurrent: [placementHistory.status]
      });
    });
    return placementHistoryEntries;
  }

  initPlacementHistoryForm() {
    return this.fb.group({
        workplace: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        designation: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        jobRole: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        location: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        from: [''],
        till: ['',[Validators.required]],
        salary: [''], //Max six digits, a dot, max two digits after dot
        placementType: ['', [ Validators.pattern('^[a-zA-Z\\s]*$'), this.validateSelf]],
        placementStatus: [''],
        coordinatorName: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        coordinatorContact: [''], // contact number with +91 - India Code
        placementRemarks: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerName: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerContact: [''],
        employerFeedback: ['', [ Validators.pattern('^[a-zA-Z\\s]*$')]],
        iscurrent: ['']
    });
  }

    addPlacementHistory() {
    const control = <FormArray>this.userForm.controls['AllPlacementHistory'];
    control.push(this.initPlacementHistoryForm());
    }

    removePlacementHistory(i: number) {
    const control = <FormArray>this.userForm.controls['AllPlacementHistory'];
    control.removeAt(i);
    }

    onSave() {
    let sectionName = 'placementHistory';
    let placementHistory: any = [];
    this.userForm.value.AllPlacementHistory.forEach(function (d: any) {
      let obj = { 'workplace': d.workplace, 'duration': { 'start': d.from, 'end': d.till }, 'designation': d.designation, 'jobRole': d.jobRole, 'iscurrent': d.iscurrent, 'location': d.location, 'salary': d.salary, 'placementType': d.placementType, 'placementStatus': d.placementStatus, 'coordinatorName': d.coordinatorName, 'coordinatorContact': d.coordinatorContact, 'placementRemarks': d.placementRemarks, 'employerName': d.employerName, 'employerContact': d.employerContact, 'employerFeedback': d.employerFeedback }
      placementHistory.push(obj);
    })
    console.log('username in onsave', this.username);

    let currentuser = this.username; 
    this.http.patch('/profile', { sectionName: sectionName, username: currentuser, data: placementHistory, token:this.authenticationService.getToken() })
      .subscribe((response) => {
        let res = response.json();
        this.authenticationService.setToken(res.authToken);
        if (res.success) {
          this.data.openSnackBar('Successfully updated', 'OK');
        }
        else {
          this.data.openSnackBar('Not updated', 'Try later');
        }
      }, (err) => {
        this.data.openSnackBar('Technical Error', 'Try again');
      });
  }

     validateSelf(control : AbstractControl) : {[s:string ]: boolean} {
      const group = control.parent;
      if (group) {
        if(group.controls['placementType'].value=="self"){
       
          group.controls['coordinatorName'].patchValue(group.controls['coordinatorName'].valid , true);
          group.controls['placementRemarks'].patchValue(group.controls['placementRemarks'].valid , true);
        }     
      }    
      return null;
    }

    fetchCoordinators(){
        let coordinators : any = [];
        let profession : String;
        console.log('the user is ', this.username);
        let currentuser = this.username;
        
        this.http.get('/profile?username=' + currentuser+'&token='+this.authenticationService.getToken()).subscribe((response: Response) => {
          let profileData = response.json();
          profileData = profileData['data'][0];
          profession = profileData.profession;
          let params = {role: 'Coordinator', professionArray: profession, page: 1, limit: 5};
          this.http.get('/coordinates?role='+params.role+'&professionArray='+params.professionArray+'&page='+params.page+'&limit='+params.limit).subscribe((res: Response)=>{
            let data : any = res.json();
            data.forEach(function(record:String){
              coordinators.push(record['personalInfo'].name);
            })  
          }) 
        })  
       return coordinators;
      }

   getLocations(){
    let locations : any = [];
    this.http.get('/locations').subscribe((response: Response) => {
      let data = response.json();
      data.forEach(function(location: String){
        locations.push(location['name']);
      })
    })
    return locations;
  }

  getJobRoles(){
    let jobRoles : any = [];
    this.http.get('/roles').subscribe((response: Response) => {
      let data = response.json();
      data.forEach(function(roles: String){
        jobRoles.push(roles['name']);
      })
    })
    return jobRoles;
  }
}