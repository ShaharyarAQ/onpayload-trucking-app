import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-incomeinfo",
  templateUrl: "incomeinfo.component.html"
})
export class IncomeinfoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService ) {}

  incomeInfo: any;

  ngOnInit() {
    this.getIncomeInfo(this.data.id)
  }

  async getIncomeInfo(id) {
    this.incomeInfo = await this.apiService.getIncomeInfo(id);    
  }

}