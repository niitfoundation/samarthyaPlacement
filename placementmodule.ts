import { PlacementRegisterService } from './services/placement-register.service';
import { JsonDataService } from './services/json-data.service';
import { EmailService } from './services/email.service';
import { Data } from './services/data.service';
import { AuthenticationService } from './services/authentication.service';
import { CustomnodeService } from './services/customnode.service'
import { AuthGuard } from './services/auth.guard';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Md2Module } from 'md2';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VerifyEmailComponent } from './components/verify-email/verifyEmail.component';
import { LoginHeaderComponent } from './components/prelogin-registration-layout/login-header/login-header.component';
import { LoginFooterComponent } from './components/prelogin-registration-layout/login-footer/login-footer.component';
import { AfterLoginHeaderComponent } from './components/postlogin-registration-layout/header-layout/headerLayout.component';
import { FooterComponent } from './components/postlogin-registration-layout/footer-layout/footer.component';
import { PasswordResetComponent } from './components/password-reset/passwordReset.component';
import { LoginComponent } from './components/login/login.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ForgotPasswordComponent } from './components/forget-password/forgetPassword.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { EmployersComponent } from './components/employers/employers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { placementComponent } from './placementComponent';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProfessionsComponent, ProfessionDialog } from './components/professions/professions.component';
import { SkillsComponent, SkillDialog } from './components/skills/skills.component';
import { LanguagesComponent, LanguageDialog } from './components/languages/languages.component';
import { LocationsComponent, LocationDialog } from './components/locations/locations.component';
import { QualificationsComponent, QualificationDialog } from './components/qualifications/qualifications.component';
import { CentresComponent, CentreDialog } from './components/centres/centres.component';
import { JobRolesComponent, JobRoleDialog } from './components/job-roles/job-roles.component';
import { ImportComponent } from './components/import-candidates/importCandidates.component';
import { SamarthyaWebComponentsModule } from 'samarthyaWebcomponent';
import { SamProfileCardService } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.service';
import { SamProfileSectionConfigService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-config.service';
import { ProfileService } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section-data.service';
import { SamProfileSectionFormComponent } from 'samarthyaWebcomponent/sam-profile/sam-profile-section-form/sam-profile-section-form.component';
import { SamProfileSectionComponent } from 'samarthyaWebcomponent/sam-profile/sam-profile-section/sam-profile-section.component';
import { SamProfileCardComponent } from 'samarthyaWebcomponent/sam-profile/sam-profile-card/sam-profile-card.component';
import { SamProfileThumbnail } from 'samarthyaWebcomponent/sam-profile/sam-profile-thumbnail/sam-profile-thumbnail.component';
import { CardDialog } from './components/cardDialog/cardDialog.component';
import { FilterTable } from './filter-table.pipe';
import { ProfileDetailComponent } from './components/profileDetail/profileDetail.component';
// import { SkillsForm } from 'samarthyaCandidate/components/profileSectionForm/skillsDialogForm/skillsForm.component';
// import { WorkExperienceForm } from 'samarthyaCandidate/components/profileSectionForm/workExperienceForm/workExperienceForm.component';
// import { QualificationForm } from 'samarthyaCandidate/components/profileSectionForm/qualificationForm/qualificationForm.component';
// import { SummaryForm } from 'samarthyaCandidate/components/profileSectionForm/summaryForm/summaryForm.component';
// import { UserService } from 'samarthyaCandidate/services/user.service';
// import { PersonalInfoForm } from 'samarthyaCandidate/components/profileSectionForm/personalInfoForm/personalInfoForm.component';
// import { JobPreferenceForm } from 'samarthyaCandidate/components/profileSectionForm/jobPreferenceForm/jobPreferenceForm.component';
import { PlacementHistoryForm } from './components/placementHistoryForm/placementHistoryForm.component';
// import { WorkExperienceFormRender } from 'samarthyaCandidate/components/profileSectionForm/workExperienceForm/workExperienceFormRender/workExperienceFormRender.component';
// import { SkillsFormRender } from 'samarthyaCandidate/components/profileSectionForm/skillsDialogForm/skillFormRender/skillsFormRender.component';
// import { JobPreferenceFormRender } from 'samarthyaCandidate/components/profileSectionForm/jobPreferenceForm/jobPreferenceFormRender/jobPreferenceFormRender.component';
import { PlacementHistoryFormRender } from './components/placementHistoryForm/placementHistoryFormRender/placementHistoryFormRender.component';
// import { ProjectsFormRender } from 'samarthyaCandidate/components/profileSectionForm/projectsForm/projectsFormRender/projectsFormRender.component';
// import { QualificationFormRender } from 'samarthyaCandidate/components/profileSectionForm/qualificationForm/qualificationFormRender/qualificationFormRender.component';
// import { ProjectsForm } from 'samarthyaCandidate/components/profileSectionForm/projectsForm/projectsForm.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule,
    SamarthyaWebComponentsModule
  ],
  declarations: [
    AboutUsComponent,
    ProfileDetailComponent,
    AdminRegistrationComponent,
    CandidateSearchComponent,
    DashboardComponent,
    EmployersComponent,
    EventPostComponent,
    ForgotPasswordComponent,
    JobPostComponent,
    LoginComponent,
    PasswordResetComponent,
    FooterComponent,
    AfterLoginHeaderComponent,
    LoginFooterComponent,
    LoginHeaderComponent,
    VerifyEmailComponent,
    placementComponent,
    ImportComponent,
    ProfessionsComponent,
    SkillsComponent,
    LanguagesComponent,
    LocationsComponent,
    QualificationsComponent,
    CentresComponent,
    JobRolesComponent,
    FilterTable,
    CardDialog,
    LanguageDialog,
    ProfessionDialog,
    CentreDialog,
    LocationDialog,
    JobRoleDialog,
    SkillDialog,
    QualificationDialog,
    PlacementHistoryForm,
    PlacementHistoryFormRender
    // routingComponents check working or not
  ],
  bootstrap: [placementComponent, CardDialog, LanguageDialog, ProfessionDialog, CentreDialog, LocationDialog, JobRoleDialog, SkillDialog, QualificationDialog, PlacementHistoryForm],
  exports: [
    AboutUsComponent,
    AdminRegistrationComponent,
    CandidateSearchComponent,
    DashboardComponent,
    ProfileDetailComponent,
    EmployersComponent,
    EventPostComponent,
    ForgotPasswordComponent,
    JobPostComponent,
    LoginComponent,
    PasswordResetComponent,
    FooterComponent,
    AfterLoginHeaderComponent,
    LoginFooterComponent,
    LoginHeaderComponent,
    VerifyEmailComponent,
    placementComponent,
    ImportComponent,
    ProfessionsComponent,
    SkillsComponent,
    LanguagesComponent,
    LocationsComponent,
    QualificationsComponent,
    CentresComponent,
    JobRolesComponent,
    SamProfileThumbnail,
    SamProfileCardComponent,
    SamProfileSectionComponent,
    SamProfileSectionFormComponent,
    CardDialog,
    // SkillsForm,
    // WorkExperienceForm,
    // QualificationForm,
    // SummaryForm,
    // PersonalInfoForm,
    // ProjectsForm,
    // JobPreferenceForm,
    PlacementHistoryForm,
    // WorkExperienceFormRender,
    // SkillsFormRender,
    // JobPreferenceFormRender,
    PlacementHistoryFormRender
    // ProjectsFormRender,
    // QualificationFormRender

  ]
})
export class placementmodule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: placementmodule,
      providers: [
        AuthGuard,
        AuthenticationService,
        CustomnodeService,
        Data,
        EmailService,
        JsonDataService,
        PlacementRegisterService,
        SamProfileCardService,
        SamProfileSectionConfigService,
        ProfileService
        // UserService

      ]
    }
  }
}