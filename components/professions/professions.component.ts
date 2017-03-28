import { element } from 'protractor';
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
  public show: any = [];

  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getProfessions(professionsObj: any) {
    this.show = [];
    this.customnodeService.readProfessions(professionsObj).subscribe(res => {
      this.data = JSON.parse(res["_body"]);
      this.data.forEach(element => {
        this.show.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }
}