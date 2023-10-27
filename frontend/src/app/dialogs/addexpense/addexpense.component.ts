import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from "src/services/api.service";
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-addexpence",
  templateUrl: "addexpense.component.html"
})
export class AddexpenceComponent {
  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddexpenceComponent>) { }

  addVehicle() {
    this.matDialog.open(AddvehicleComponent)
  }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addExpense(form.value);
    this.dialogRef.close(true);
  }

}
