import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css'],
  providers:[CustomnodeService]
})
export class CentresComponent implements OnInit {

  constructor(private customnodeService:CustomnodeService) { }

  ngOnInit() {
  }

  getCentres(centresObj:any){
    return this.customnodeService.readCentres(centresObj);
  }

}