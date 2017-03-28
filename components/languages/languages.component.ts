import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  providers:[CustomnodeService]
})
export class LanguagesComponent implements OnInit {

  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getLanguages(languagesObj:any){
    return this.customnodeService.readLanguages(languagesObj);
  }

}