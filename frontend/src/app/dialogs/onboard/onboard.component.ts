import { Component } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-onboard",
  templateUrl: "onboard.component.html"
})
export class OnboardComponent {
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<OnboardComponent>) { }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addMember(form.value);
    this.dialogRef.close(true);
  }

}
