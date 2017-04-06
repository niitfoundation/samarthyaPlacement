import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AuthGuard } from './services/auth.guard';
import { AfterLoginHeaderComponent } from './components/postlogin-registration-layout/header-layout/headerLayout.component';
import { VerifyEmailComponent } from './components/verify-email/verifyEmail.component';
import { ForgotPasswordComponent } from './components/forget-password/forgetPassword.component';
import { PasswordResetComponent } from './components/password-reset/passwordReset.component';
import { ImportComponent } from './components/import-candidates/importCandidates.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LocationsComponent } from './components/locations/locations.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { CentresComponent } from './components/centres/centres.component';
import { JobRolesComponent } from './components/job-roles/job-roles.component';
// routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'verifyEmail', component: VerifyEmailComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'passwordReset', component: PasswordResetComponent },
  { path: 'register', component: AdminRegistrationComponent },
  {
    path: 'home', component: AfterLoginHeaderComponent, canActivate: [AuthGuard],
    children: [
      { path: 'import', component: ImportComponent, canActivate: [AuthGuard] },
      { path: 'aboutUs', component: AboutUsComponent, canActivate: [AuthGuard] },
      { path: 'candidateRegister/:location', component: CandidateRegisterComponent, canActivate: [AuthGuard] },
      { path: 'candidateSearch', component: CandidateSearchComponent, canActivate: [AuthGuard] },
      { path: 'eventPost', component: EventPostComponent, canActivate: [AuthGuard] },
      { path: 'jobPost', component: JobPostComponent, canActivate: [AuthGuard] },
      { path: 'passwordReset/:reset', component: PasswordResetComponent, canActivate: [AuthGuard] },
      { path: 'register/:title', component: AdminRegistrationComponent, canActivate: [AuthGuard] },
      { path: 'professions', component: ProfessionsComponent, canActivate: [AuthGuard] },
      { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard] },
      { path: 'languages', component: LanguagesComponent, canActivate: [AuthGuard] },
      { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
      { path: 'qualifications', component: QualificationsComponent, canActivate: [AuthGuard] },
      { path: 'centres', component: CentresComponent, canActivate: [AuthGuard] },
      { path: 'roles', component: JobRolesComponent, canActivate: [AuthGuard] },
      { path: '**', component: DashboardComponent, canActivate: [AuthGuard] },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { };
