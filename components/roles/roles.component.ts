import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[CustomnodeService]
})
export class RolesComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService:CustomnodeService) { }

  ngOnInit() {
  }

  getRoles(rolesObj:any){
    this.showData = [];
    this.customnodeService.readRoles(rolesObj).subscribe(res => {
      this.data = JSON.parse(res["_body"]);
      this.data.forEach(element => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

}