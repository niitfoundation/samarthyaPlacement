import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomnodeService {
    private url: string = "";

    constructor(private http: Http) { }

    readProfessions(professionsObj: any) {
        this.url = '/professions';
        console.log(professionsObj);
        console.log(this.url+'?name='+professionsObj.name+'&limit='+professionsObj.limit);
        return this.http.get(this.url+'?name='+professionsObj.name+'&limit='+professionsObj.limit).map((response: Response) => response)
    }

    readSkills(skillsObj: any) {
        this.url = '/skills';
        return this.http.get(this.url, skillsObj).map((response: Response) => response.json)
    }

    readLanguages(languagesObj: any) {
        this.url = '/languages';
        return this.http.get(this.url, languagesObj).map((response: Response) => response.json)
    }

    readLocations(locationsObj: any) {
        this.url = '/locations';
        return this.http.get(this.url, locationsObj).map((response: Response) => response.json)
    }

    readQualifications(qualificationsObj: any) {
        this.url = '/qualifications';
        return this.http.get(this.url, qualificationsObj).map((response: Response) => response.json)
    }

    readCentres(centresObj: any) {
        this.url = '/centres';
        return this.http.get(this.url, centresObj).map((response: Response) => response.json)
    }

    readRoles(rolesObj: any) {
        this.url = '/roles';
        return this.http.get(this.url, rolesObj).map((response: Response) => response.json)
    }
}