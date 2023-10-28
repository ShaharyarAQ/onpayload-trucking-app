import { HttpClient } from "@angular/common/http";
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
    async deleteIncome(data: any) {
        const url = `${this.appUrl}/deleteIncome?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    async getIncomeInfo(data: any) {
        const url = `${this.appUrl}/getIncomeInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }

    // Expenses
    async addExpense(data: any) {
        return this.http.post(`${this.appUrl}/addExpense`, data).toPromise();
    }
    async getExpenses() {
        return this.http.get(`${this.appUrl}/getExpenses`).toPromise();
    }
    async deleteExpense(data: any) {
        const url = `${this.appUrl}/deleteExpense?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    async getExpenseInfo(data: any) {
        const url = `${this.appUrl}/getExpenseInfo?param=${data}`;
        return this.http.get(url).toPromise();
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
    async deleteVehicle(data: any) {
        const url = `${this.appUrl}/deleteVehicle?param=${data}`;
        return this.http.delete(url).toPromise();
    }

    // Clients
    async addClient(data: any) {
        return this.http.post(`${this.appUrl}/addClient`, data).toPromise();
    }

    // IFTA
    async addIfta(data: any) {
        return this.http.post(`${this.appUrl}/addIfta`, data).toPromise();
    }
}
