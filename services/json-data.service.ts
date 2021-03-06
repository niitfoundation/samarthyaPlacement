import { LoginComponent } from './../components/login/login.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class JsonDataService {

  // url to store data from json file for Registration details

  private urlRegister: string = '';

  // url to retrive data from json file for languages
  private url: string = '';
  public timer: any;
  public mygovKey = 'bb69790db92cb17b4b5c8b3bf4f9fc02';

  private urlPincode = 'https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key='
  + this.mygovKey + '&filters[pincode]=';
  // url to get profession
  private urlProfession = '/professions';

  // url to get locations
  private urlLocations = '/locations';
  private urlRole = '/roles';

  // url to get placementCenter
  private urlPlacementCenter = '/centres';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private snackBar: MdSnackBar, private router: Router) { }

  // snackBar for notification
  openSnackBar(message: any, action: any) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // Store Registration details in json file
  create(formData: any) {


    this.http.post(this.urlRegister, formData).subscribe(data => {
      this.openSnackBar(formData.email, 'Register Successfully');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 4000);
    }, error => {
      console.log(error.json());
    });
  }

  // get json data for langauges and dropdown
  getJsonData() {
    this.url = '/languages';
    return this.http.get(this.url).map((response: Response) => response.json());
  };

  getJsonNavList(tokenVerification: any): any {
    this.url = '/auth/nav-menus';
    return this.http.get(this.url, this.authoriZation(tokenVerification))
      .map((response: Response) =>
        response.json())
  }
  private authoriZation(userToken: any) {
    if (userToken) {
      let headers = new Headers({ 'Authorization': userToken });
      return new RequestOptions({ headers: headers });
    }

  }


  getPincode(pincode: any) {
    return this.http.get(this.urlPincode + pincode)
      .map((response: Response) => response.json());

  };
  getRoles() {
    return this.http.get(this.urlRole).map((response: Response) => response.json());

  }

  getProfession() {
    return this.http.get(this.urlProfession).map((response: Response) => response.json());
  };

  // get json data for placementCenter
  getPlacementCenter() {
    return this.http.get(this.urlPlacementCenter).map((response: Response) => response.json());
  };



}

