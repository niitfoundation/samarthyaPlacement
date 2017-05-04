import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { CardDialog } from './../cardDialog/cardDialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Http, Response } from '@angular/http';
import  {AuthenticationService} from './../../services/authentication.service'

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.css']
})
export class CandidateSearchComponent implements OnInit {
  public cls = 'search-box big-res';
  public searchForm: FormGroup;
  public message = '';
  public showBtn = false;
  public result: any[] = [];
  public noResult = false;
  public loading = false;

  getSearchResult() {

    this.loading = true;
    this.result = [];
    if (this.searchForm.value.searchControl.trim().length > 0) {
      let urlSearch = '/candidates-search?intent=' + this.searchForm.value.searchControl+'&token='+this.AuthenticationService.getToken();
      return this.http.get(urlSearch).subscribe((response: Response) => {
        this.result = response.json().result;       
        if (this.result.length <= 0) {
          this.noResult = true;
          this.loading = false;
        } else {
          this.noResult = false;
          this.loading = false;
        }
      });
    }
    this.loading = false;
  };


  constructor( @Inject(FormBuilder) fb: FormBuilder, public dialog: MdDialog, private http: Http, private AuthenticationService:AuthenticationService
  ) {

    this.searchForm = fb.group({
      searchControl: ['', [Validators.required]],
    });
  }

  openCardDialog(username: string) {
    let dialogRef = this.dialog.open(CardDialog, {
      height: '95%',
      // width: '50%',
      data: username
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }


  displayData: any[] = [];

  ngOnInit() {
    this.setData();
    if (this.min >= this.showRecords) {
      this.prevBtn = true;
      // console.log(this.prevBtn);
    } else {
      this.prevBtn = false;
    }
  }

  public showRecords = 6;
  public min = 0;
  public max = this.min + this.showRecords;

  setData() {
    for (let i = this.min; i < this.max; i++) {
      this.displayData.push(this.result[i]);
    }
    // console.log(this.displayData);
  }
  public prevBtn = true;
  public nextBtn = true;
  onNext() {
    this.displayData = [];
    this.min = this.min + this.showRecords;
    this.max = this.min + this.showRecords;
    this.setData();
    // console.log(this.min, this.max, this.displayData);
    if (this.min >= this.showRecords) {
      this.prevBtn = true;
    } else {
      this.prevBtn = false;
    }
    if (this.max >= this.result.length) {
      this.nextBtn = false;
    } else {
      this.nextBtn = true;
    }
  }

  onPrev() {
    this.displayData = [];
    this.min = this.min - this.showRecords;
    this.max = this.min + this.showRecords;
    this.setData();
    if (this.min >= this.showRecords) {
      this.prevBtn = true;
    } else {
      this.prevBtn = false;
    }
    if (this.max >= this.result.length) {
      this.nextBtn = false;
    } else {
      this.nextBtn = true;
    }
  }

  public change() {
    this.cls = 'expand-out search-box big-res';
  }
  public fullView() {
    this.cls = 'expand search-box big-res';
  }

}