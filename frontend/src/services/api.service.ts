import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable({
    providedIn: `root`,
})
export class ApiService {
    appUrl = environment.appUrl;

    constructor(private http: HttpClient) { }
    
    // Incomes
    async addIncome(data: any) {
        return this.http.post(`${this.appUrl}/addIncome`, data).toPromise();
    }
    async getIncomes() {
        return this.http.get(`${this.appUrl}/getIncomes`).toPromise();
    }
    async getIncomeInfo(data: any) {
        const url = `${this.appUrl}/getIncomeInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async updateIncome(id: any, data: any) {
        const url = `${this.appUrl}/updateIncome?param=${id}`;
        return this.http.put(`${url}`, data ).toPromise()
    }
    async deleteIncome(data: any) {
        const url = `${this.appUrl}/deleteIncome?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    

    // Expenses
    async addExpense(data: any) {
        return this.http.post(`${this.appUrl}/addExpense`, data).toPromise();
    }
    async getExpenses() {
        return this.http.get(`${this.appUrl}/getExpenses`).toPromise();
    }
    async getExpenseInfo(data: any) {
        const url = `${this.appUrl}/getExpenseInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async updateExpense(id: any, data: any) {
        const url = `${this.appUrl}/updateExpense?param=${id}`;
        return this.http.put(`${url}`, data ).toPromise()
    }
    async deleteExpense(data: any) {
        const url = `${this.appUrl}/deleteExpense?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    

    // Members
    async addMember(data: any) {
        return this.http.post(`${this.appUrl}/addMember`, data).toPromise();
    }
    async getMembers() {
        return this.http.get(`${this.appUrl}/getMembers`).toPromise();
    }
    async getMemberInfo(data: any) {
        const url = `${this.appUrl}/getMemberInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async updateMember(id: any, data: any) {
        const url = `${this.appUrl}/updateMember?param=${id}`;
        return this.http.put(`${url}`, data ).toPromise()
    }
    async deleteMember(data: any) {
        const url = `${this.appUrl}/deleteMember?param=${data}`;
        return this.http.delete(url).toPromise();
    }

    // Vehicles
    async addVehicle(data: any) {
        return this.http.post(`${this.appUrl}/addVehicle`, data).toPromise();
    }
    async getVehicles() {
        return this.http.get(`${this.appUrl}/getVehicles`).toPromise();
    }
    async getVehicleInfo(data: any) {
        const url = `${this.appUrl}/getVehicleInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async updateVehicle(id: any, data: any) {
        const url = `${this.appUrl}/updateVehicle?param=${id}`;
        return this.http.put(`${url}`, data ).toPromise()
    }
    async deleteVehicle(data: any) {
        const url = `${this.appUrl}/deleteVehicle?param=${data}`;
        return this.http.delete(url).toPromise();
    }

    // Clients
    async getClients() {
        return this.http.get(`${this.appUrl}/getClients`).toPromise();
    }
    async addClient(data: any) {
        return this.http.post(`${this.appUrl}/addClient`, data).toPromise();
    }
}
