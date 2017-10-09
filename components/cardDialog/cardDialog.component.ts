import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SamProfileCardService } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.service';
import { SamProfileSectionConfigService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-config.service';
import { ProfileService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-data.service';



@Component({
  selector: 'card-dialog',
  templateUrl: './cardDialog.component.html',
  styleUrls: ['./cardDialog.component.css'],
  providers: [ProfileService, SamProfileSectionConfigService, SamProfileCardService]
})
export class CardDialog implements OnInit {

  profileCardData: any;
  profileSections: any[];
  profileData: Object;
  profileConfig: any;
  profileFormConfig: any;
  profileFormSections: any[];
  showFullProfile = false;


  constructor(
    public dialogRef: MdDialogRef<CardDialog>,
    private SamProfileCardService: SamProfileCardService,
    // service for getting data for profile sections
    private SamProfileService: ProfileService,

    // Service for getting rendering config of profile sections
    private SamProfileSectionConfigService: SamProfileSectionConfigService,
  ) {
    // this will provide all section related info
    this.profileSections = [
      { 'name': 'summary', 'title': 'Summary', 'align': 'row' },
      { 'name': 'personalInfo', 'title': 'Personal Informations', 'align': 'row' },
      { 'name': 'qualifications', 'title': 'Educational Qualification', 'align': 'column' },
      { 'name': 'jobPreferences', 'title': 'Job Preferences', 'align': 'column' },
      { 'name': 'experiences', 'title': 'Experiences', 'align': 'column' },
      { 'name': 'skills', 'title': 'Skills', 'align': 'row' },
      { 'name': 'projects', 'title': 'Projects', 'align': 'column' },
      { 'name': 'placementHistory', 'title': 'Placement History', 'align': 'column'}      
    ];
  }

  ngOnInit() {
    this.SamProfileCardService.getProfileCard(this.dialogRef.config.data)
      .subscribe((resEmployeeData: any) => { this.profileCardData = resEmployeeData });



    this.SamProfileSectionConfigService.getProfileSectionConfig()
      .subscribe((resEmployeeData: any) => {
        this.profileConfig = resEmployeeData[0],
          console.log(this.profileConfig)
      });


    this.SamProfileService.getProfile(this.dialogRef.config.data)
      .subscribe((resEmployeeData: any) => {
        console.log(resEmployeeData)
        this.profileData = resEmployeeData
      });
  }

  showProfile() {
    this.showFullProfile = true;
    // window.open('/login');
  }
  showCard() {
    this.showFullProfile = false;
    // window.open('/login');
  }

  // this will provide section config for perticular sections for VIEW profile config section
  getSectionConfig(sectionName: string) {
    return this.profileConfig[sectionName];
  }

  // this will provide section data for perticular sections from profile service
  getSectiondata(sectionName: string) {
    return this.profileData[sectionName];
  }

}
