import { CustomnodeService } from './../../services/customnode.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Data } from './../../services/data.service';



@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  providers: [CustomnodeService]
})
export class LanguagesComponent implements OnInit {

  data: any;
  search: string = null;
  public showData: any = [];
  showCard = false;

  getAlllanguages() {
    this.customnodeService.readLanguages()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAlllanguages();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(LanguageDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAlllanguages();
      },1000);
    })
  }

  ngOnInit() {
  }

  delete(lang: any) {
    this.customnodeService.deleteLanguages(lang).subscribe((res) => {
      if (res.json().success) {
        this.getAlllanguages();
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
  selector: 'LanguageDialog',
  templateUrl: './languagesDialog.component.html',
  styleUrls: ['./languagesDialog.component.css'],
  providers: [CustomnodeService]

})
export class LanguageDialog {
  public userForm: FormGroup;
  public languageData: any;
  public action: any;

  ngOnInit() {
    this.languageData = this.dialog.config.data || '';
    this.userForm.patchValue({
      'name': this.languageData.name || '',
      'code': this.languageData.code || '',
      'nativeName': this.languageData.nativeName || ''
    })
    if (this.languageData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<LanguageDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]{2,}')]],
      code: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]{2,}')]],
      nativeName: ['']
    });

  }

  save() {
    let langData = {
      name: this.userForm.value.name,
      code: this.userForm.value.code,
      nativeName: this.userForm.value.nativeName
    }
    if (this.action == 'add') {
      this.customnodeService.createLanguage(langData).subscribe((res) => {
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
      this.customnodeService.editLanguages(langData).subscribe((res) => {
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