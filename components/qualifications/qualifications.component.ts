import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
  providers:[CustomnodeService]
})
export class QualificationsComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getQualifications(qualificationsObj:any){
    this.showData = [];
    this.customnodeService.readQualifications(qualificationsObj).subscribe(res => {
      this.data = JSON.parse(res["_body"]);
      this.data.forEach(element => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

  addQualification(qualificationObj: any) {
    this.showData = [];
    if(qualificationObj.name !== undefined && qualificationObj.name !== ""){
      this.customnodeService.createQualification(qualificationObj).subscribe(res => {
        this.data = JSON.parse(res["_body"]);
        this.data.forEach(element => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else{
      this.showData.push("Please enter a qualification");
    }
  }

}