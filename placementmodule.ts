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
import { ProfileCardComponent } from './components/profile-card/profileCard.component';
import { LoginHeaderComponent } from './components/prelogin-registration-layout/login-header/login-header.component';
import { LoginFooterComponent } from './components/prelogin-registration-layout/login-footer/login-footer.component';
import { AfterLoginHeaderComponent } from './components/postlogin-registration-layout/header-layout/headerLayout.component';
import { FooterComponent } from './components/postlogin-registration-layout/footer-layout/footer.component';
import { PasswordResetComponent } from './components/password-reset/passwordReset.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ForgotPasswordComponent } from './components/forget-password/forgetPassword.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { EmployersComponent } from './components/employers/employers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { placementComponent } from './placementComponent';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LocationsComponent } from './components/locations/locations.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { CentresComponent } from './components/centres/centres.component';
import { RolesComponent } from './components/roles/roles.component';

import { ImportComponent } from './components/import-candidates/importCandidates.component';

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
RouterModule
],
declarations: [
AboutUsComponent,
AdminRegistrationComponent,
CandidateRegisterComponent,
CandidateSearchComponent,
DashboardComponent,
EmployersComponent,
EventPostComponent,
ForgotPasswordComponent,
JobPostComponent,
LandingPageComponent,
LoginComponent,
PasswordResetComponent,
FooterComponent,
AfterLoginHeaderComponent,
LoginFooterComponent,
LoginHeaderComponent,
ProfileCardComponent,
VerifyEmailComponent,
placementComponent,
ImportComponent,
ProfessionsComponent,
SkillsComponent,
LanguagesComponent,
LocationsComponent,
QualificationsComponent,
CentresComponent,
RolesComponent
// routingComponents check working or not
],
bootstrap: [placementComponent],
exports: [
AboutUsComponent,
AdminRegistrationComponent,
CandidateRegisterComponent,
CandidateSearchComponent,
DashboardComponent,
EmployersComponent,
EventPostComponent,
ForgotPasswordComponent,
JobPostComponent,
LandingPageComponent,
LoginComponent,
PasswordResetComponent,
FooterComponent,
AfterLoginHeaderComponent,
LoginFooterComponent,
LoginHeaderComponent,
ProfileCardComponent,
VerifyEmailComponent,
placementComponent,
ImportComponent,
ProfessionsComponent,
SkillsComponent,
LanguagesComponent,
LocationsComponent,
QualificationsComponent,
CentresComponent,
RolesComponent
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
	   PlacementRegisterService
      ]
    }
  }

}
