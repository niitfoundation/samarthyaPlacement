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
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [CustomnodeService]
})
export class SkillsComponent implements OnInit {

  data: any;
  search: string = null;

  getAllSkills() {
    this.customnodeService.readSkills()
      .subscribe((data) => {
        this.data = data.json();
      });
  }
  constructor(public dialog: MdDialog, private router: Router, private dataSnack: Data, private customnodeService: CustomnodeService, private http: Http) {
    this.getAllSkills();
  }

  openDialog(details: any) {
    let dialogRef = this.dialog.open(SkillDialog, {
      // height: '80%',
      width: '80%',
      data: details
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          this.getAllSkills();
      },1500);
    })
  }

  ngOnInit() {
  }

  delete(skillData: any) {
    this.customnodeService.deleteSkill(skillData).subscribe((res) => {
      if (res.json().success) {
        this.getAllSkills();
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
  selector: 'SkillDialog',
  templateUrl: './skillsDialog.component.html',
  styleUrls: ['./skillsDialog.component.css'],
  providers: [CustomnodeService]
})
export class SkillDialog {
  public userForm: FormGroup;
  public skillsData: any;
  public action: any;
  public oldName:any;
  ngOnInit() {
    this.skillsData = this.dialog.config.data || '';
    this.oldName = this.skillsData.name || '';
    this.userForm.patchValue({
      'name': this.skillsData.name || ''
    })
    if (this.skillsData == '')
      this.action = 'add';
  }



  constructor( @Inject(FormBuilder) fb: FormBuilder, private data: Data, private router: Router, private customnodeService: CustomnodeService, private dialog: MdDialogRef<SkillDialog>, private http: Http) {

    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9#*&!()@$^ ]{2,}')]],
    });

  }

  save() {
    let skillData = {
      newName: this.userForm.value.name,
    }
    if (this.action == 'add') {
      this.customnodeService.createSkill(skillData).subscribe((res) => {
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
      skillData['oldName']=this.oldName;
      this.customnodeService.editSkill(skillData).subscribe((res) => {
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