import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomnodeService {
    private url: string = "";

    constructor(private http: Http) { }

    readProfessions(professionsObj: any) {
        this.url = '/professions';
        return this.http.get(this.url+'?name='+professionsObj.name+'&limit='+professionsObj.limit).map((response: Response) => response)
    }

    readSkills(skillsObj: any) {
        this.url = '/skills';
        return this.http.get(this.url+'?name='+skillsObj.name+'&limit='+skillsObj.limit).map((response: Response) => response)
    }

    readLanguages(languagesObj: any) {
        this.url = '/languages';
        return this.http.get(this.url+'?name='+languagesObj.name+'&limit='+languagesObj.limit).map((response: Response) => response)
    }

    readLocations(locationsObj: any) {
        this.url = '/locations';
        return this.http.get(this.url+'?name='+locationsObj.name+'&limit='+locationsObj.limit).map((response: Response) => response)
    }

    readQualifications(qualificationsObj: any) {
        this.url = '/qualifications';
        return this.http.get(this.url+'?name='+qualificationsObj.name+'&limit='+qualificationsObj.limit).map((response: Response) => response)
    }

    readCentres(centresObj: any) {
        this.url = '/centres';
        return this.http.get(this.url+'?name='+centresObj.name+'&limit='+centresObj.limit).map((response: Response) => response)
    }

    readRoles(rolesObj: any) {
        this.url = '/roles';
        return this.http.get(this.url+'?name='+rolesObj.name+'&limit='+rolesObj.limit).map((response: Response) => response)
    }

    createSkill(skillsObj: any) {
        this.url = '/skills/add';
        return this.http.post(this.url,skillsObj).map((response: Response) => response)
    }

    createProfession(professionsObj: any) {
        this.url = '/professions/add';
        return this.http.post(this.url,professionsObj).map((response: Response) => response)
    }

    createLanguage(languagesObj: any) {
        this.url = '/languages/add';
        return this.http.post(this.url,languagesObj).map((response: Response) => response)
    }

    createLocation(locationsObj: any) {
        this.url = '/locations/add';
        return this.http.post(this.url,locationsObj).map((response: Response) => response)
    }

    createQualification(qualificationsObj: any) {
        this.url = '/qualifications/add';
        return this.http.post(this.url,qualificationsObj).map((response: Response) => response)
    }

    createCentre(centresObj: any) {
        this.url = '/centres/add';
        return this.http.post(this.url,centresObj).map((response: Response) => response)
    }

    createRole(rolesObj: any) {
        this.url = '/roles/add';
        return this.http.post(this.url,rolesObj).map((response: Response) => response)
    }
}