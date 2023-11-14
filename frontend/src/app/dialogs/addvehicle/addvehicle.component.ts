import { Component, Inject, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-addvehicle",
  templateUrl: "addvehicle.component.html",
  styleUrls: ['./addvehicle.component.scss']
})
export class AddvehicleComponent implements OnInit {
  form: FormGroup;
  vehicleInfo: any;
  isUpdate: boolean;
  drivers: any = [];
  members: any = [];
  loader: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddvehicleComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }


  async vehicleData() {
    this.loader = false;
    this.members = await this.apiService.getMembers();
    this.members.forEach(member => {
      if (member.jobTitle === 'Driver') this.drivers.push(member)
    });
    this.loader = true;
  }

  async ngOnInit() {
    await this.vehicleData();
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      unitNumber: [this.isUpdate ? this.data.vehicleInfo.unitNumber : '', Validators.required],
      make: [this.isUpdate ? this.data.vehicleInfo.make : '', Validators.required],
      model: [this.isUpdate ? this.data.vehicleInfo.model : '', Validators.required],
      year: [this.isUpdate ? this.data.vehicleInfo.year : ''],
      odometer: [this.isUpdate ? this.data.vehicleInfo.odometer : ''],
      plateNumber: [this.isUpdate ? this.data.vehicleInfo.plateNumber : '', Validators.required],
      vin: [this.isUpdate ? this.data.vehicleInfo.vin : '', Validators.required],
      vehicleType: [this.isUpdate ? this.data.vehicleInfo.vehicleType : '', Validators.required],
      driverId: [this.isUpdate ? this.data.vehicleInfo.driverId : ''],
      note: [this.isUpdate ? this.data.vehicleInfo.note : ''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {

    if (this.isUpdate) {
      const response: any = await this.apiService.updateVehicle(
        this.data.vehicleInfo.id,
        this.form.value
      );
      // console.log(response);
      this.snackBar.open('Vehicle Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        const data: any = await this.apiService.addVehicle(this.form.value);
        this.dialogRef.close(true);
      } else {
        // error
      }
    }
  }
}
