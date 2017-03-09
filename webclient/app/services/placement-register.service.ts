import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {CandidateRegister} from '../modal/candidate-register.modal';

@Injectable()
export class PlacementRegisterService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = '/api/addCandidate'; 
  constructor(private http: Http) { }
  add(userdata):any  {
    this.http
      .post(this.url, userdata, {headers: this.headers})
      .toPromise()
      .then(res =>{ res.json().data; } )
      .catch(this.handleError);

       return true;
  }
  
  private handleError(error: any): any {
    return false;
  }
}