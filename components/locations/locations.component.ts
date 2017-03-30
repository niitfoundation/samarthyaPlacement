import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [CustomnodeService]
})
export class LocationsComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getLocations(locationsObj: any) {
    this.showData = [];
    this.customnodeService.readLocations(locationsObj).subscribe(res => {
      this.data = JSON.parse(res['_body']);
      this.data.forEach((element: any) => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }
}