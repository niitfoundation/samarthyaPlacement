import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { CardDialog } from './../cardDialog/cardDialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.css']
})
export class CandidateSearchComponent implements OnInit {
  public cls = 'search-box big-res';
  public searchForm: FormGroup;
  public lengthOfProfile = 10;
  public loopingCount = Math.ceil(10 / 3);
  public resultProfile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public arr = new Array(this.loopingCount);
  public count = 0;
  public loops = -1;
  public message = '';



  getSearchResult() {
    let urlSearch = '/candidates-search?intent=' + this.searchForm.value.searchControl;
    console.log(this.searchForm.value.searchControl);
    return this.http.get(urlSearch).subscribe((response: Response) => { response.json(), console.log("-->>>", response.json()) });
  };


  getArray() {
    for (let obj in this.resultProfile) {

      if (this.count % 3 === 0) {
        this.arr[++this.loops] = new Array(3);
      }
      this.arr[this.loops][this.count] = obj;
      this.count++;
    }
    console.log(this.arr)
  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, public dialog: MdDialog, private http: Http
  ) {

    this.searchForm = fb.group({
      searchControl: ['', [Validators.required]],
    });
  }

  public thumbData = {
    userName: 'Divesh Snakhla',
    imgSrc: 'https://eliaslealblog.files.wordpress.com/2014/03/user-200.png',
    profession: 'Full Stack Developer',
    role: 'Manager',
    experience: 3
  }

  // tempData = [
  //   '1', '2', '3', '4', '5', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'];

  openCardDialog(username: string) {
    // username = 'sankhlasaini2@gmail.com';
    console.log(username);
    let dialogRef = this.dialog.open(CardDialog, {
      height: '95%',
      // width:'100%',
      data: username
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }


  displayData: any[] = [];

  ngOnInit() {
    this.getArray();
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
    console.log(this.displayData);
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

  public getSearch() {
    console.log(this.searchForm.value.searchControl);

  }

  public change() {
    this.cls = 'expand-out search-box big-res';
  }
  public fullView() {
    this.cls = 'expand search-box big-res';
  }

  public result = [
    {
      "gender": "male",
      "displayName": "pankush manchanda",
      "dob": "2015-04-07T15:28:00.000Z",
      "name": "sankhlasaini@gmail.com",
      "email": "sankhlasaini@gmail.com",
      "profession": "civilaviation"
    }
  ];

}
