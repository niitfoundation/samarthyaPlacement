import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class GraphDataService{

	private data : any[];
	private urlSamarthReports = '/samarthReport';
	constructor(private http: Http){}

	getGraphData(){
		return this.http.get(this.urlSamarthReports).map((response: Response) => response.json());
	}
}