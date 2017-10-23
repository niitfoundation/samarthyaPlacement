import { SkillsForm } from 'samarthyaCandidate/components/profileSectionForm/skillsDialogForm/skillsForm.component';
import { WorkExperienceForm } from 'samarthyaCandidate/components/profileSectionForm/workExperienceForm/workExperienceForm.component';
import { QualificationForm } from 'samarthyaCandidate/components/profileSectionForm/qualificationForm/qualificationForm.component';
import { SummaryForm } from 'samarthyaCandidate/components/profileSectionForm/summaryForm/summaryForm.component';
import { UserService } from 'samarthyaCandidate/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, Input , OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PersonalInfoForm } from 'samarthyaCandidate/components/profileSectionForm/personalInfoForm/personalInfoForm.component';
import { JobPreferenceForm } from 'samarthyaCandidate/components/profileSectionForm/jobPreferenceForm/jobPreferenceForm.component';
import { PlacementHistoryForm } from '../placementHistoryForm/placementHistoryForm.component';
import { ProjectsForm } from 'samarthyaCandidate/components/profileSectionForm/projectsForm/projectsForm.component';
import { SamProfileCardService } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.service';
import { SamProfileSectionConfigService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-config.service';
import { ProfileService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-data.service';

@Component({
  selector: 'profile-detail',
  templateUrl: './profileDetail.component.html',
  styleUrls: ['./profileDetail.component.css'],
  providers: [ProfileService, SamProfileSectionConfigService, SamProfileCardService]
})

export class ProfileDetailComponent implements OnInit {
  profileSections: any[];
  profileData: any;
  profileCardData: any;
  profileConfig: any;
  profileFormConfig: any;
  profileFormSections: any[];
  username: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    public dialog: MdDialog,

    // service for getting data for profile sections
    private SamProfileService: ProfileService,

    // Service for getting rendering config of profile sections
    private SamProfileSectionConfigService: SamProfileSectionConfigService,

    // service for providing sam profile card
    private SamProfileCardService: SamProfileCardService,
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
      { 'name': 'placementHistory', 'title': 'Placement History', 'align': 'column'},
    ];
  }

  public currentSectionTitle: string;
  public currentSectionAlign: string;
  public currentSectionName: string;
  public personalInfoData: {} = {};
  public jobpreferenceInfoData: {} = {};
  public projectsData: {} = {};
  public skillsData: any[] = [];
  public qualificationsData: any[] = [];
  public workExperienceData: any[] = [];
  public summaryData: {} = {};
  public placementHistoryData: {} = {};

  // this function will work when clicked on edit btn
  onEdit(sectionName: string) {
    switch (sectionName) {
      case 'personalInfo': this.openPersonalInfoDialog(); break;
      case 'qualifications': this.openQualificationsDialog(); break;
      case 'jobPreferences': this.openJobPrefereneceInfoDialog(); break;
      case 'experiences': this.openWorkExperienceDialog(); break;
      case 'summary': this.openSummaryDialog(); break;
      case 'projects': this.openProjectsDialog(); break;
      case 'skills': this.openSkillsDialog(); break;
      case 'placementHistory': this.openPlacementHistoryDialog(); break;
    }
  }

  openQualificationsDialog() {
    let dialogRef = this.dialog.open(QualificationForm, {
      height: '80%',
      width: '80%',
      data: this.qualificationsData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  openSummaryDialog() {
    let dialogRef = this.dialog.open(SummaryForm, {
      // height: '80%',
      width: '80%',
      data: this.summaryData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  openPersonalInfoDialog() {
    let dialogRef = this.dialog.open(PersonalInfoForm, {
      // height: '90%',
      width: '80%',
      data: this.personalInfoData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
  openWorkExperienceDialog() {
    let dialogRef = this.dialog.open(WorkExperienceForm, {
      height: '90%',
      width: '80%',
      data: this.workExperienceData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  openSkillsDialog() {
    let dialogRef = this.dialog.open(SkillsForm, {
      height: '80%',
      width: '80%',
      data: this.skillsData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
  openJobPrefereneceInfoDialog() {
    let dialogRef = this.dialog.open(JobPreferenceForm, {
      height: '80%',
      width: '80%',
      data: this.jobpreferenceInfoData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
  openProjectsDialog() {
    let dialogRef = this.dialog.open(ProjectsForm, {
      height: '80%',
      width: '80%',
      data: this.projectsData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
  openPlacementHistoryDialog(){
    let dialogRef = this.dialog.open(PlacementHistoryForm, {
      height: '80%',
      width: '80%',
      data: {placementHistoryData: this.placementHistoryData, username: this.username}
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.username = params['username']);
    if (this.username) {
      let currentUser = this.username;
    }

    // this will get the data for profile config
    this.SamProfileSectionConfigService.getProfileSectionConfig()
      .subscribe((resEmployeeData: any) => {
        this.profileConfig = resEmployeeData[0]
      });

     // console.log("*********************", this.profileData.username);

    // this will get the data for profile form config
    // this.SamProfileSectionConfigService.getProfileSectionFormConfig()
    //   .subscribe((resEmployeeData: any) => this.profileFormConfig = resEmployeeData);

    // this.SamProfileService.getProfile(JSON.parse(localStorage.getItem('currentUser'))['username'])
    //   .subscribe((resEmployeeData: any) => { this.profileData = resEmployeeData, this.personalInfoData = resEmployeeData.personalInfo });

    // this.profileData = this.SamProfileService.getProfileData(JSON.parse(localStorage.getItem('currentUser'))['username']);
    // this.personalInfoData = this.profileData['personalInfo']

    this.SamProfileService.getProfile(this.username)
      .subscribe((resEmployeeData: any) => {
        this.profileData = resEmployeeData,
          this.jobpreferenceInfoData = resEmployeeData.jobPreferences,
          this.personalInfoData = resEmployeeData.personalInfo,
          this.qualificationsData = resEmployeeData.qualifications,
          this.projectsData = resEmployeeData.projects,
          this.skillsData = resEmployeeData.skills,
          this.workExperienceData = resEmployeeData.experiences,
          this.summaryData = resEmployeeData.summary,
          this.placementHistoryData = resEmployeeData.placementHistory
      });

    // this.profileData = this.SamProfileService.getProfileData(JSON.parse(localStorage.getItem('currentUser'))['username'])

    // this.profileData = resEmployeeData,
    // this.personalInfoData = this.profileData['personalInfo'],
    //   this.qualificationsData = this.profileData['qualifications']
    // });
    this.SamProfileCardService.getProfileCard(this.username)
      .subscribe((resEmployeeData: any) => { this.profileCardData = resEmployeeData });
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
