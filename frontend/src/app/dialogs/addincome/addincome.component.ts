import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { ApiService } from "src/services/api.service";
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: "app-addincome",
  templateUrl: "addincome.component.html"
})
export class AddincomeComponent {
  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddincomeComponent>) { }

  addVehicle(){
    this.matDialog.open(AddvehicleComponent)
  }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addIncome(form.value);
    this.dialogRef.close(true);
  }

}
