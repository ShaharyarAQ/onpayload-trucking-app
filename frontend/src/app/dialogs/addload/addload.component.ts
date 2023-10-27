import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from "src/services/api.service";
import { MatDialogRef } from '@angular/material/dialog';
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { AddclientComponent } from "../addclient/addclient.component";


@Component({
  selector: "app-addload",
  templateUrl: "addload.component.html"
})
export class AddloadComponent {
  constructor(
    private matDialog: MatDialog,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddloadComponent>) { }

  addVehicle(){
    this.matDialog.open(AddvehicleComponent)
  }

  addClient(){
    this.matDialog.open(AddclientComponent)
  }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addLoad(form.value);
    this.dialogRef.close(true);
  }

}
