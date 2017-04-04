import { JsonDataService } from './../../../services/json-data.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css'],
  providers: [JsonDataService]
})
export class LoginHeaderComponent implements OnInit {

  public languages: any = [];

  constructor(private JsonDataService: JsonDataService, private router: Router) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
  }
  getdata(jsonData: any) {
    this.languages = jsonData;
  }
  login() {
    this.router.navigate(['/login']);
  }
  verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }
  samarthya() {
    this.router.navigate(['/login']);
  }

}