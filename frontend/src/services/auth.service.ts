import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable({
    providedIn: `root`,
})
export class AuthService {
    url = environment.appUrl + '/auth';

    constructor(private http: HttpClient) { }

    async login(data: any) {
        return this.http.post(`${this.url}/login`, data).toPromise();
    }
}
