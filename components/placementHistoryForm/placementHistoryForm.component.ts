import { PlacementHistoryFormRender } from './placementHistoryFormRender/placementHistoryFormRender.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
  
@Component({
  selector: 'placementHistory-form',
  templateUrl: './placementHistoryForm.component.html'
  // styleUrls: ['./placementHistoryForm.component.css']
})
export class PlacementHistoryForm implements OnInit {
  public placementHistoryValue:any;
  public username: any;
  
  constructor(public dialogRef: MdDialogRef<PlacementHistoryForm>) {}

  ngOnInit() {
    this.placementHistoryValue = this.dialogRef.config.data.placementHistoryData;
    this.username = this.dialogRef.config.data.username;
  }
  
}