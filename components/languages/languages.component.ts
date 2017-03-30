import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  providers: [CustomnodeService]
})
export class LanguagesComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getLanguages(languagesObj: any) {
    this.showData = [];
    this.customnodeService.readLanguages(languagesObj).subscribe(res => {
      this.data = JSON.parse(res['_body']);
      this.data.forEach((element: any) => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

}