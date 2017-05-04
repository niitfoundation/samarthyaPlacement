import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from './authentication.service'
// import {CandidateRegister} from '../modal/candidate-register.modal';
@Injectable()
export class PlacementRegisterService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '';
  constructor(private http: Http,private AuthenticationService:AuthenticationService) { }
  add(userdata: any): any {
    this.url = '/coordinates'
    return this.http.post(this.url, userdata).map((response: Response) => response.json());

  }
  verifyToken(token: any) {
    this.url = '/auth/verify-email';
    return this.http.post(this.url, { token: token }).map((response: Response) => response.json());

  }

  private handleError(error: any): any {
    return false;
  }

  getHistory(user: any) {
    this.url = '/profile-import/import-history?user='+user+"&token="+this.AuthenticationService.getToken();
    return this.http.get(this.url).map((response: Response) => response.json());

  }

  getDetailHistory(documentId: any) {
    this.url = '/profile-import/failure-history?documentId=' + documentId+"&token="+this.AuthenticationService.getToken();
    return this.http.get(this.url).map((response: Response) => response.json());

  }
}