import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css'],
  providers: [CustomnodeService]
})
export class ProfessionsComponent implements OnInit {
  data: any;
  public showData: any = [];

  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getProfessions(professionsObj: any) {
    this.showData = [];
    this.customnodeService.readProfessions(professionsObj).subscribe(res => {
      this.data = JSON.parse(res['_body']);
      this.data.forEach((element: any) => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

  addProfession(professionObj: any) {
    this.showData = [];
    if (professionObj.name !== undefined && professionObj.name !== '') {
      this.customnodeService.createProfession(professionObj).subscribe(res => {
        this.data = JSON.parse(res['_body']);
        this.data.forEach((element: any) => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else {
      this.showData.push('Please enter a profession');
    }
  }

}