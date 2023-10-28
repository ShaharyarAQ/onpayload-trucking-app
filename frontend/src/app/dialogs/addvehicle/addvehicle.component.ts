import { Component, Inject, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-addvehicle",
  templateUrl: "addvehicle.component.html",
})
export class AddvehicleComponent implements OnInit {
  form: FormGroup;
  vehicleInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddvehicleComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      unitNumber: [this.isUpdate ? this.data.vehicleInfo.unitNumber : ''],
      make: [this.isUpdate ? this.data.vehicleInfo.make : ''],
      model: [this.isUpdate ? this.data.vehicleInfo.model : ''],
      year: [this.isUpdate ? this.data.vehicleInfo.year : ''],
      odometer: [this.isUpdate ? this.data.vehicleInfo.odometer : ''],
      plateNumber: [this.isUpdate ? this.data.vehicleInfo.plateNumber : ''],
      vin: [this.isUpdate ? this.data.vehicleInfo.vin : ''],
      vehicleType: [this.isUpdate ? this.data.vehicleInfo.vehicleType : ''],
      assignedDriver: [this.isUpdate ? this.data.vehicleInfo.assignedDriver : ''],
      note: [this.isUpdate ? this.data.vehicleInfo.note : ''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: any = await this.apiService.addVehicle(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }
}
