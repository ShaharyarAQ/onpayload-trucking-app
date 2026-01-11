import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable({
    providedIn: `root`,
})
export class LoadService {
    url = environment.appUrl + '/loads';

    constructor(private http: HttpClient) { }

    async get(id: string = null) {
        // const token: any = localStorage.getItem('token');
        // const headers = new HttpHeaders().set('token', token);
        return id ?
            this.http.get(`${this.url}/${id}`).toPromise() :
            this.http.get(`${this.url}`,).toPromise();
    }

    async getHashed(id: string) {
        return this.http.get(`${this.url}/hashed/${id}`).toPromise();
    }

    async add(load: any) {
        return this.http.post(`${this.url}`, load).toPromise();
    }

    async update(id: any, data: any) {
        const url_ = `${this.url}/?param=${id}`;
        return this.http.put(`${url_}`, data).toPromise()
    }

    async updateWithHashedId(hashedId: string, data: any) {
        const url_ = `${this.url}/${hashedId}`;
        return this.http.patch(`${url_}`, data).toPromise()
    }

    async startLoad(hashedId: string) {
        const url_ = `${this.url}/start-load/${hashedId}`;
        return this.http.get(`${url_}`).toPromise()
    }

    async delete(id: string = null) {
        return this.http.delete(`${this.url}/${id}`).toPromise();
    }
}
