import { Component } from "@angular/core";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-addIFTA",
  templateUrl: "addIFTA.component.html"
})
export class AddIFTAComponent {
  constructor(private apiService: ApiService) { }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addIfta(form.value);
    console.log(data);
  }

}
