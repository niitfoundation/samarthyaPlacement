import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomnodeService {
    private url: string = '';

    constructor(private http: Http) { }

    readProfessions() {
        this.url = '/professions';
        return this.http.get(this.url).map((response: Response) => response)
    }

    readSkills(skillsObj: any) {
        this.url = '/skills';
        return this.http.get(this.url + '?name=' + skillsObj.name + '&limit=' + skillsObj.limit).map((response: Response) => response)
    }

    readLanguages() {
        this.url = '/languages';
        return this.http.get(this.url).map((response: Response) => response)
    }

    editLanguages(languagesObj: any) {
        this.url = '/languages';
        return this.http.patch(this.url,languagesObj).map((response: Response) => response)
    }

     editProfession(professionObj: any) {
        this.url = '/professions';
        return this.http.patch(this.url,professionObj).map((response: Response) => response)
    }

    editCentre(centreObj: any) {
        this.url = '/centres';
        return this.http.patch(this.url,centreObj).map((response: Response) => response)
    }

    deleteLanguages(langCode: any) {
        this.url = '/languages';
        return this.http.delete(this.url+'?code=' +langCode.code+'&name='+langCode.name).map((response: Response) => response)
    }

    deleteProfessions(language: any) {
        this.url = '/professions';
        return this.http.delete(this.url+'?name=' +language.name).map((response: Response) => response)
    }

     deleteCentres(centres: any) {
        this.url = '/centres';
        return this.http.delete(this.url+'?name=' +centres.name).map((response: Response) => response)
    }

    readLocations(locationsObj: any) {
        this.url = '/locations';
        return this.http.get(this.url + '?name=' + locationsObj.name + '&limit=' + locationsObj.limit).map((response: Response) => response)
    }

    readQualifications(qualificationsObj: any) {
        this.url = '/qualifications';
        return this.http.get(this.url + '?name=' + qualificationsObj.name + '&limit=' + qualificationsObj.limit).map((response: Response) => response)
    }

    readCentres() {
        this.url = '/centres';
        return this.http.get(this.url).map((response: Response) => response)
    }

    readJobRoles(jobRolesObj: any) {
        this.url = '/roles';
        return this.http.get(this.url + '?name=' + jobRolesObj.name + '&limit=' + jobRolesObj.limit).map((response: Response) => response)
    }

    createSkill(skillsObj: any) {
        this.url = '/skills';
        return this.http.post(this.url, skillsObj).map((response: Response) => response)
    }

    createProfession(professionsObj: any) {
        this.url = '/professions';
        return this.http.post(this.url, professionsObj).map((response: Response) => response)
    }

    createLanguage(languagesObj: any) {
        this.url = '/languages';
        return this.http.post(this.url, languagesObj).map((response: Response) => response)
    }

    createLocation(locationsObj: any) {
        this.url = '/locations';
        return this.http.post(this.url, locationsObj).map((response: Response) => response)
    }

    createQualification(qualificationsObj: any) {
        this.url = '/qualifications';
        return this.http.post(this.url, qualificationsObj).map((response: Response) => response)
    }

    createCentre(centresObj: any) {
        this.url = '/centres';
        return this.http.post(this.url, centresObj).map((response: Response) => response)
    }

    createJobRole(jobRolesObj: any) {
        this.url = '/roles';
        return this.http.post(this.url, jobRolesObj).map((response: Response) => response)
    }
}