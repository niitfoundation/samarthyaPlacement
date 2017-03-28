import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers:[CustomnodeService]
})
export class LocationsComponent implements OnInit {

  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getLocations(locationsObj:any){
    return this.customnodeService.readLocations(locationsObj);
  }
}