import { LoginComponent } from './../components/login/login.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private url: string = "";
  //   public data2 :LoginComponent  ;
  constructor(private http: Http) { }
  getEmail(email: any) {
    this.url = '/emailverify/candidates?email=' + email;
    return this.http.get(this.url).map((response: Response) => response.json());
  };
  postdata(mailObj: LoginComponent) {
    this.url = '/emailverify/sendmail'
    var mailObjString = JSON.stringify(mailObj);
    var params = { json: mailObjString };
    var res;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url, params, {
      headers: headers
    }).map(res => res.json());
  }

  // getRegister() {
  //   // console.log(this.linksend.link+"link aa gya");
  //   return <any>this.http.get('http://localhost:3004/verifiedmail')
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  // }
}