import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { CandidateSearchService } from './../../services/candidate-search';
@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.css']
})
export class CandidateSearchComponent implements OnInit {
  public cls = 'search-box big-res';
  public searchForm: FormGroup;
 

  constructor( @Inject(FormBuilder) fb: FormBuilder,private CandidateSearchService:CandidateSearchService) {
    this.searchForm = fb.group({
      searchControl: ['', [Validators.required]],


    });
  }

  ngOnInit() {

  }
  public getThumbnail() {
    this.CandidateSearchService.getThumbnail(this.searchForm.value.searchControl).subscribe((res)=>{
        
    },err=>{

    });

    }
  

  public change() {
    this.cls = 'expand-out search-box big-res';
  }
  public fullView() {
    this.cls = 'expand search-box big-res';
  }

}
