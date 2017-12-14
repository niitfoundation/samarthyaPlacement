import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.css']
})

export class StatCardsComponent implements OnInit {

	public totalCandidates: number;
	public candidatesToFollowUp: number;

	constructor(public http: Http){}
	ngOnInit() {
		this.getReportResults();
  	}

  getReportResults(){
  	this.http.get('/samarthReport/cards').subscribe((response: Response) => {
      let data = response.json();
      this.totalCandidates = data['TotalCandidates'];
      this.candidatesToFollowUp = data['FollowUpCandidates'];
    })
  }

}