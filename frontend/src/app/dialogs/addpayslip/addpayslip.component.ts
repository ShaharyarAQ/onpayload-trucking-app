import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-addpayslip",
  templateUrl: "addpayslip.component.html"
})
export class AddpayslipComponent {
  constructor(private apiService: ApiService) { }

  async onSubmit(form: any) {
    // const data: any = await this.apiService.addClient(form.value);
    console.log(form.value);
  }

}
