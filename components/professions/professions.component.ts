import { CustomnodeService } from './../../services/customnode.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Data } from './../../services/data.service';



@Component({
  selector: 'languages',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss'],
  providers: [CustomnodeService]
})
export class ProfessionsComponent implements OnInit {

  data: any;
  search: string = null;
  public showData: any = [];
  showCard = false;

  getAllProfessions() {
    this.customnodeService.readProfessions()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllProfessions();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(ProfessionDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAllProfessions();
      },1000);
    })
  }

  ngOnInit() {
  }

  delete(professionData: any) {
    this.customnodeService.deleteProfessions(professionData).subscribe((res) => {
      if (res.json().success) {
        this.getAllProfessions();
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
  templateUrl: './professionsDialog.component.html',
  providers: [CustomnodeService]
})
export class ProfessionDialog {
  public userForm: FormGroup;
  public professionsData: any;
  public action: any;
  public oldName:any;
  ngOnInit() {
    this.professionsData = this.dialog.config.data || '';
    this.oldName = this.professionsData.name || '';
    this.userForm.patchValue({
      'name': this.professionsData.name || ''
    })
    if (this.professionsData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<ProfessionDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let professionData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createProfession(professionData).subscribe((res) => {
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
      professionData['oldName']=this.oldName;
      this.customnodeService.editProfession(professionData).subscribe((res) => {
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