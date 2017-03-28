import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css'],
  providers: [CustomnodeService]
})
export class CentresComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getCentres(centresObj: any) {
    this.showData = [];
    this.customnodeService.readCentres(centresObj).subscribe(res => {
      this.data = JSON.parse(res["_body"]);
      this.data.forEach(element => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

}