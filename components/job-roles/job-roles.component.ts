import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roles',
  templateUrl: './job-roles.component.html',
  styleUrls: ['./job-roles.component.css'],
  providers: [CustomnodeService]
})
export class JobRolesComponent implements OnInit {
  data: any;
  public showData: any = [];
  showCard = false;
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getRoles(jobRolesObj: any) {
    this.showCard = true;
    this.showData = [];
    this.customnodeService.readJobRoles(jobRolesObj).subscribe(res => {
      this.data = JSON.parse(res['_body']);
      this.data.forEach((element: any) => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

  addJobRole(jobRolesObj: any) {
    this.showData = [];
    if (jobRolesObj.name !== undefined && jobRolesObj.name !== '') {
      this.customnodeService.createJobRole(jobRolesObj).subscribe(res => {
        this.data = JSON.parse(res['_body']);
        this.data.forEach((element: any) => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else {
      this.showData.push('Please enter a role');
    }
  }

}