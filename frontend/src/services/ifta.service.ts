import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable({
    providedIn: `root`,
})
export class IftaService {
    url = environment.appUrl + '/iftas';

    constructor(private http: HttpClient) { }

    async get(id: string = null) {
        return id ?
            this.http.get(`${this.url}/${id}`).toPromise() :
            this.http.get(`${this.url}`).toPromise();
    }

    async add(ifta: any) {
        return this.http.post(`${this.url}`, ifta).toPromise();
    }
    async update(id: any, data: any) {
        const url_ = `${this.url}/?param=${id}`;
        return this.http.put(`${url_}`, data ).toPromise()
    }

    async delete(id: string = null) {
        return this.http.delete(`${this.url}/${id}`).toPromise();
    }
}
