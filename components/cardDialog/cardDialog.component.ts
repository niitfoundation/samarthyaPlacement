import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SamProfileCardService } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.service';



@Component({
  selector: 'card-dialog',
  templateUrl: './cardDialog.component.html',
  styleUrls: ['./cardDialog.component.css'],
  providers: [SamProfileCardService]

})
export class CardDialog implements OnInit {

  public profileCardData: any;

  constructor(
    public dialogRef: MdDialogRef<CardDialog>,
    private SamProfileCardService: SamProfileCardService
  ) { }

  ngOnInit() {
    this.SamProfileCardService.getProfileCard(this.dialogRef.config.data)
      .subscribe((resEmployeeData: any) => { this.profileCardData = resEmployeeData });

    console.log(this.dialogRef.config.data);
  }

}


