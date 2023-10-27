import { Component, Inject, OnInit } from "@angular/core";
import { ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from "src/services/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-addvehicle",
  templateUrl: "addvehicle.component.html",
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddvehicleComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddvehicleComponent>) { }

  vehicleInfo: any;
  isUpdate: Boolean;

  async ngOnInit() {
    if (this.data.isUpdate === true){
      this.isUpdate = true;
      this.vehicleInfo = await this.apiService.getVehicleInfo(this.data.id);
      console.log(this.isUpdate);
      console.log(this.vehicleInfo);
    }
  }

  async onSubmit(form: any) {
    const data: any = await this.apiService.addVehicle(form.value);
    this.dialogRef.close(true);
  }

}
