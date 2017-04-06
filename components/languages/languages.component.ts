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
  showCard = false;
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getLanguages(languagesObj: any) {
    this.showCard = true;
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

  addLanguage(languageObj: any) {
    this.showData = [];
    if (languageObj.name !== undefined && languageObj.name !== '') {
      this.customnodeService.createLanguage(languageObj).subscribe(res => {
        this.data = JSON.parse(res['_body']);
        this.data.forEach((element: any) => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else {
      this.showData.push('Please enter a language');
    }
  }

}