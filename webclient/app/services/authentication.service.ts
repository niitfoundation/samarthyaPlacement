import { not } from '@angular-cli/ast-tools/node_modules/rxjs/util/not';
import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'; //http request using observable
import 'rxjs/add/operator/map'  // map operatror for observable
// this service is used to authenticate the current user is logged in or not

@Injectable()
export class AuthenticationService {
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().auth_token;
                if (token) {
                    let usertype = response.json().role;
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    // return true to indicate successful login
                    return response.json();
                } else {
                    // return false to indicate failed login
                    return response.json();
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;

        localStorage.removeItem('currentUser');
        this.router.navigate(['/'])
    }
}