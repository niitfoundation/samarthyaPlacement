import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[CustomnodeService]
})
export class RolesComponent implements OnInit {

  constructor(private customnodeService:CustomnodeService) { }

  ngOnInit() {
  }

  getRoles(rolesObj:any){
    return this.customnodeService.readRoles(rolesObj);
  }

}