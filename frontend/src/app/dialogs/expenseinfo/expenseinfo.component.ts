import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-expenseinfo",
  templateUrl: "expenseinfo.component.html"
})
export class ExpenseinfoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService ) {}

  expenseInfo: any;

  ngOnInit() {
    this.getExpenseInfo(this.data.id)
  }

  async getExpenseInfo(id) {
    this.expenseInfo = await this.apiService.getExpenseInfo(id);    
  }


}
