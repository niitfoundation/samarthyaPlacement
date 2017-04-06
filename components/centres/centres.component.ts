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
  showCard = false;
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getCentres(centresObj: any) {
    this.showCard = true;
    this.showData = [];
    this.customnodeService.readCentres(centresObj).subscribe(res => {
      this.data = JSON.parse(res['_body']);
      this.data.forEach((element: any) => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

  addCentre(centresObj: any) {
    this.showData = [];
    if (centresObj.name !== undefined && centresObj.name !== '') {
      this.customnodeService.createCentre(centresObj).subscribe(res => {
        this.data = JSON.parse(res['_body']);
        this.data.forEach((element: any) => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else {
      this.showData.push('Please enter a centre');
    }
  }

}