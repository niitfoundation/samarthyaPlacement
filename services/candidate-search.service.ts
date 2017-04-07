import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import {CandidateRegister} from '../modal/candidate-register.modal';
@Injectable()
export class CandidateSearchService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '';
  constructor(private http: Http) { }
  getThumbnail(searchField){
     this.url = '/coordinates/thumbnail-view?'+searchField;
    return this.http.get(this.url).map((response: Response) => response.json());
  }
}