import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  public placementTypeData = [
    { name: 'SELF', value: 'self' },
    { name: 'NIIT COORDINATOR', value: 'niit coordinator' },
    { name: 'OTHERS', value: 'others' },
    { name: 'UNKNOWN', value: 'unknown' }
  ];
  public options = [
    { name: 'HAS REJECTED', value: 'has rejected' },
    { name: 'WAS REJECTED FOR', value: 'was rejected for' },
    { name: 'HAS ACCEPTED', value: 'has accepted' },
    { name: 'IS IN PROGRESS', value: 'is in progress' }
  ];

  constructor(private fb: FormBuilder, private http: Http, private router: Router, private data: Data, private authenticationService:AuthenticationService) {
  }
 
  minDate: Date = null;
  maxDate: Date = null

  ngOnInit(){

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
        designation: [placementHistory.designation, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        jobRole: [placementHistory.jobRole, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        location: [placementHistory.location, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        from: [placementHistory.duration.start, Validators.required],
        till: [placementHistory.duration.end, Validators.required],
        salary: [placementHistory.salary], //Max six digits, a dot, max two digits after dot
        placementType: [placementHistory.placementType, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        placementStatus: [placementHistory.options],
        coordinatorName: [placementHistory.coordinatorName, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        coordinatorContact: [placementHistory.coordinatorContact], // contact number with +91 - India Code
        placementRemarks: [placementHistory.placementRemarks, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerName: [placementHistory.employerName, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerContact: [placementHistory.employerContact],
        employerFeedback: [placementHistory.employerFeedback, [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        iscurrent: [placementHistory.status]
      });
    });
    return placementHistoryEntries;
  }

  initPlacementHistoryForm() {
    return this.fb.group({
        workplace: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        designation: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        jobRole: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        location: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        from: ['', Validators.required],
        till: ['', Validators.required],
        salary: [''], //Max six digits, a dot, max two digits after dot
        placementType: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        placementStatus: [''],
        coordinatorName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        coordinatorContact: [''], // contact number with +91 - India Code
        placementRemarks: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        employerContact: [''],
        employerFeedback: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
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
      let obj = { 'workplace': d.workplace, 'duration': { 'start': d.from, 'end': d.till }, 'designation': d.designation, 'jobRole': d.jobRole, 'iscurrent': d.iscurrent, 'location': d.location, 'salary': d.salary, 'placementType': d.placementType, 'placementStatus': d.placementStatus, 'coordinatorName': d.coordinatorName, 'coordinatorContact': d.coordinatorName, 'placementRemarks': d.placementRemarks, 'employerName': d.employerName, 'employerContact': d.employerContact, 'employerFeedback': d.employerFeedback }
      placementHistory.push(obj);
    })
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
}