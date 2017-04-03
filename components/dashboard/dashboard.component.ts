// import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:any;
  constructor(private route: ActivatedRoute,private router:Router) {
   
  }
  ngOnInit() 
    {
    }
  

}
