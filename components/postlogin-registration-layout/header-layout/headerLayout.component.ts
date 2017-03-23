import { Data } from './../../../services/data.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { JsonDataService } from './../../../services/json-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './headerLayout.component.html',
  styleUrls: ['./headerLayout.component.css'],
  providers: [JsonDataService, AuthenticationService]
})
export class AfterLoginHeaderComponent implements OnInit {

  public languages = [];
  public navList = [];


  constructor(private JsonDataService: JsonDataService, private AuthenticationService: AuthenticationService, private data: Data, private router: Router) { }

  ngOnInit() {
    // getting languages form json file

    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
    let tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
    this.JsonDataService.getJsonNavList(tokenVerification)
      .subscribe(
      role => {
        if (role.success) {
          this.getNavList(role.data)
        }
        else {
          tokenVerification = null;
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
          this.data.openSnackBar(role["message"], 'Ok');

        }
      }, error => {
        console.log(error);
      })
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
  getNavList(navListItem) {
    console.log(navListItem);
    this.navList = navListItem;
  }
  logoutUser() {

    this.AuthenticationService.logout();
    this.data.openSnackBar("logged out successfully", "OK");
  }
  changePassword(){
    this.router.navigate(['/home/passwordReset/reset']);
  }
}