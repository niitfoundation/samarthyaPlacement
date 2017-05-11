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
  selector: 'centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.scss'],
  providers: [CustomnodeService]
})
export class CentresComponent implements OnInit {

  data: any;
  search: string = null;

  getAllCentres() {
    this.customnodeService.readCentres()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllCentres();
  }

  ngOnInit() {
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(CentreDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAllCentres();
      },1000);
    })
  }

  delete(centreData: any) {
    this.customnodeService.deleteCentres(centreData).subscribe((res) => {
      if (res.json().success) {
        this.getAllCentres();
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
  selector: 'ProfessionDialog',
  templateUrl: './centresDialog.component.html',
  providers: [CustomnodeService]
})
export class CentreDialog {
  public userForm: FormGroup;
  public centresData: any;
  public action: any;
  public oldName:any;
  ngOnInit() {
    this.centresData = this.dialog.config.data || '';
    this.oldName = this.centresData.name || '';
    this.userForm.patchValue({
      'name': this.centresData.name || ''
    })
    if (this.centresData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<CentreDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let centreData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createCentre(centreData).subscribe((res) => {
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
      centreData['oldName']=this.oldName;
      this.customnodeService.editCentre(centreData).subscribe((res) => {
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