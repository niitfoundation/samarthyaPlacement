import { CustomnodeService } from './../../services/customnode.service';
import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Data } from './../../services/data.service';


@Pipe({ name: 'dataPipe' })
export class DataTablePipe implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      query = query.toLowerCase();
      return array.filter((value: any, index: number, arr: any) =>
        value.name.toLowerCase().indexOf(query) > -1);
    }
    return array;
  }
}

@Component({
  selector: 'jobRoles',
  templateUrl: './job-roles.component.html',
  styleUrls: ['./job-roles.component.scss'],
  providers: [CustomnodeService]
})
export class JobRolesComponent implements OnInit {

  data: any;
  search: string = null;

  getAllJobRoles() {
    this.customnodeService.readJobRoles()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllJobRoles();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(JobRoleDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAllJobRoles();
      },1000);
    })
  }

  ngOnInit() {
  }

  delete(roleData: any) {
    this.customnodeService.deleteJobRole(roleData).subscribe((res) => {
      if (res.json().success) {
        this.getAllJobRoles();
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
  selector: 'JobRoleDialog',
  templateUrl: './job-rolesDialog.component.html',
  styleUrls: ['./job-rolesDialog.component.css'],
  providers: [CustomnodeService]
})
export class JobRoleDialog {
  public userForm: FormGroup;
  public rolesData: any;
  public action: any;
  public oldName:any;
  ngOnInit() {
    this.rolesData = this.dialog.config.data || '';
    this.oldName = this.rolesData.name || '';
    this.userForm.patchValue({
      'name': this.rolesData.name || ''
    })
    if (this.rolesData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<JobRoleDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let roleData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createJobRole(roleData).subscribe((res) => {
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
      roleData['oldName']=this.oldName;
      this.customnodeService.editJobRole(roleData).subscribe((res) => {
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