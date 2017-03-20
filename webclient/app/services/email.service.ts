import { LoginComponent } from './../components/login/login.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private url: string = "";
  //   public data2 :LoginComponent  ;
  constructor(private http: Http) { }
  sendEmail(mailObj: any) {
    this.url = '/auth/registerEmail';
    return this.http.post(this.url,mailObj).map((response: Response) => response.json());
  };
}