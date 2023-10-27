import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    async addLoad(data: any) {
        return this.http.post('http://localhost:3000/addLoad', data).toPromise();
    }
    async getLoads(){
        return this.http.get('http://localhost:3000/getLoads').toPromise();
    }
    async deleteLoad(data: any){
        const url = `http://localhost:3000/deleteLoad?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    async getLoadInfo(data: any){
        const url = `http://localhost:3000/getLoadInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }



    /////////////////////////////////
    async addIncome(data: any) {
        return this.http.post('http://localhost:3000/addIncome', data).toPromise();
    }
    async getIncomes(){
        return this.http.get('http://localhost:3000/getIncomes').toPromise();
    }
    async deleteIncome(data: any){
        const url = `http://localhost:3000/deleteIncome?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    async getIncomeInfo(data: any){
        const url = `http://localhost:3000/getIncomeInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    ////////////////////////////////


    async addExpense(data: any) {
        return this.http.post('http://localhost:3000/addExpense', data).toPromise();
    }
    async getExpenses(){
        return this.http.get('http://localhost:3000/getExpenses').toPromise();
    }
    async deleteExpense(data: any){
        const url = `http://localhost:3000/deleteExpense?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    async getExpenseInfo(data: any){
        const url = `http://localhost:3000/getExpenseInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    ///////////////////////////////

    async addMember(data:any){
        return this.http.post('http://localhost:3000/addMember', data).toPromise();
    }
    async getMembers(){
        return this.http.get('http://localhost:3000/getMembers').toPromise();
    }
    async getMemberInfo(data: any){
        const url = `http://localhost:3000/getMemberInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async deleteMember(data: any){
        const url = `http://localhost:3000/deleteMember?param=${data}`;
        return this.http.delete(url).toPromise();
    }


    ///////////////////////////////

    async addVehicle(data:any){
        return this.http.post('http://localhost:3000/addVehicle', data).toPromise();
    }
    async getVehicles(){
        return this.http.get('http://localhost:3000/getVehicles').toPromise();
    }
    async getVehicleInfo(data: any){
        const url = `http://localhost:3000/getVehicleInfo?param=${data}`;
        return this.http.get(url).toPromise();
    }
    async deleteVehicle(data: any){
        const url = `http://localhost:3000/deleteVehicle?param=${data}`;
        return this.http.delete(url).toPromise();
    }
    ////////////////////////////////


    async addClient(data:any){
        return this.http.post('http://localhost:3000/addClient', data).toPromise();
    }
    ////////////////////////////////

    async addIfta(data:any){
        return this.http.post('http://localhost:3000/addIfta', data).toPromise();
    }

    ////////////////////////////////

    

}
