import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-addclient",
  templateUrl: "addclient.component.html"
})
export class AddclientComponent {
  constructor(private apiService: ApiService) { }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addClient(form.value);
    console.log(data);
  }

}
