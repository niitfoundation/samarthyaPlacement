import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private url: string = '';
  //   public data2 :LoginComponent  ;
  constructor(private http: Http) { }
  sendEmail(mailObj: any) {
    this.url = '/auth/register-email';
    return this.http.post(this.url, mailObj).map((response: Response) => response.json());
  };

  verifyEmail(user: any) {
    this.url = '/auth/verify-user';
    return this.http.post(this.url, user).map((response: Response) => response.json());
  };

  sendResetPasswordEmail(mailObj: any) {
    this.url = '/auth/verify-reset-email';
    return this.http.post(this.url, mailObj).map((response: Response) => response.json());
  };
}