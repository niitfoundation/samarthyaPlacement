import { CustomnodeService } from './../../services/customnode.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Data } from './../../services/data.service';



@Component({
  selector: 'qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss'],
  providers: [CustomnodeService]
})
export class QualificationsComponent implements OnInit {

  data: any;
  search: string = null;

  getAllQualifications() {
    this.customnodeService.readQualifications()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllQualifications();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(QualificationDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        this.getAllQualifications();
      }, 1000);
    })
  }

  ngOnInit() {
  }

  delete(qualificationData: any) {
    this.customnodeService.deleteQualification(qualificationData).subscribe((res) => {
      if (res.json().success) {
        this.getAllQualifications();
        this.dataSnack.openSnackBar('Updated Successfully', 'OK');
      }
      else {
        this.dataSnack.openSnackBar('Update Failure', 'Try again');
      }
    }, (err) => {
      this.dataSnack.openSnackBar('Update Failure due to relationship with other node', 'Try again');

    })
  }
}



@Component({
  selector: 'QualificationDialog',
  templateUrl: './qualificationsDialog.component.html',
  styleUrls: ['./qualificationsDialog.component.css'],
  providers: [CustomnodeService]
})
export class QualificationDialog {
  public userForm: FormGroup;
  public qualificationsData: any;
  public action: any;
  public oldName: any;
  ngOnInit() {
    this.qualificationsData = this.dialog.config.data || '';
    this.oldName = this.qualificationsData.name || '';
    this.userForm.patchValue({
      'name': this.qualificationsData.name || ''
    })
    if (this.qualificationsData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<QualificationDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let qualificationData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createQualification(qualificationData).subscribe((res) => {
        if (res.json().success) {
          this.data.openSnackBar('Added Successfully', 'OK');
        }
        else {
          this.data.openSnackBar('Update Failure', 'Try again');

        }
      }, (err) => {
        this.data.openSnackBar('Update Failure', 'Try again');

      })
    }
    else {
      qualificationData['oldName'] = this.oldName;
      this.customnodeService.editQualification(qualificationData).subscribe((res) => {
        if (res.json().success) {
          this.data.openSnackBar('Updatedd Successfully', 'OK');
        }
        else {
          this.data.openSnackBar('Update Failure', 'Try again');

        }
      }, (err) => {
        this.data.openSnackBar('Update Failure', 'Try again');

      })
    }

  }

}