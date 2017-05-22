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
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  providers: [CustomnodeService]
})
export class LocationsComponent implements OnInit {
  data: any;
  search: string = null;

  getAllLocations() {
    this.customnodeService.readLocations()
      .subscribe((data) => {
        this.data = data.json();
      });
  }

  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllLocations();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(LocationDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAllLocations();
      },1500);
    })
  }

  ngOnInit() {
  }

  delete(locationData: any) {
    this.customnodeService.deleteLocations(locationData).subscribe((res) => {
      if (res.json().success) {
        this.getAllLocations();
        this.dataSnack.openSnackBar('Deleted Successfully', 'OK');
      }
      else {
        this.dataSnack.openSnackBar('Delete Failure', 'Try again');
      }
    }, (err) => {
      this.dataSnack.openSnackBar('Delete Failure due to relationship with other node', 'Try again');

    })
  }
}



@Component({
  selector: 'LocationDialog',
  templateUrl: './locationsDialog.component.html',
  providers: [CustomnodeService]
})
export class LocationDialog {
  public userForm: FormGroup;
  public locationsData: any;
  public action: any;
  public oldName:any;
  ngOnInit() {
    this.locationsData = this.dialog.config.data || '';
    this.oldName = this.locationsData.name || '';
    this.userForm.patchValue({
      'name': this.locationsData.name || ''
    })
    if (this.locationsData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<LocationDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let locationData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createLocation(locationData).subscribe((res) => {
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
      locationData['oldName']=this.oldName;
      this.customnodeService.editLocation(locationData).subscribe((res) => {
        if (res.json().success) {
          this.data.openSnackBar('Updated Successfully', 'OK');
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