import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {CandidateRegister} from '../modal/candidate-register.modal';
@Injectable()
export class PlacementRegisterService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '/api/addCandidate';
  constructor(private http: Http) { }
  add(userdata,userCredentialsData): any {
    return this.http.post(this.url, {userData:userdata,userCredentialsData:userCredentialsData}).map((response: Response) => response.json());

  }

  private handleError(error: any): any {
    return false;
  }
}