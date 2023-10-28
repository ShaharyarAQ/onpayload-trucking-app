import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable({
    providedIn: `root`,
})
export class LoadService {
    url = environment.appUrl + '/loads';

    constructor(private http: HttpClient) { }

    async get(id: string = null) {
        return id ?
            this.http.get(`${this.url}/${id}`).toPromise() :
            this.http.get(`${this.url}`).toPromise();
    }

    async getHashed(id: string) {
        return this.http.get(`${this.url}/hashed/${id}`).toPromise();
    }

    async add(load: any) {
        return this.http.post(`${this.url}`, load).toPromise();
    }

    async delete(id: string = null) {
        return this.http.delete(`${this.url}/${id}`).toPromise();
    }
}
