import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
  providers:[CustomnodeService]
})
export class QualificationsComponent implements OnInit {

  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getQualifications(qualificationsObj:any){
    return this.customnodeService.readQualifications(qualificationsObj);
  }

}