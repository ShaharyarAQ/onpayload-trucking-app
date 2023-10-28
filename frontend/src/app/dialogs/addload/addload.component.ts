import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { AddclientComponent } from "../addclient/addclient.component";
import { LoadService } from "src/services/load.service";


@Component({
  selector: "app-addload",
  templateUrl: "addload.component.html"
})
export class AddloadComponent implements OnInit {

  form: FormGroup;
  loadInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private loadService: LoadService,
    private dialogRef: MatDialogRef<AddloadComponent>,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.loadInfo.date : ''],
      driver: [this.isUpdate ? this.data.loadInfo.driver : ''],
      pay: [this.isUpdate ? this.data.loadInfo.pay : ''],
      pickupCity: [this.isUpdate ? this.data.loadInfo.pickupCity : ''],
      pickupState: [this.isUpdate ? this.data.loadInfo.pickupState : ''],
      pickupZipcode: [this.isUpdate ? this.data.loadInfo.pickupZipcode : ''],
      destinationCity: [this.isUpdate ? this.data.loadInfo.destinationCity : ''],
      destinationState: [this.isUpdate ? this.data.loadInfo.destinationState : ''],
      destinationZipcode: [this.isUpdate ? this.data.loadInfo.destinationZipcode : ''],
      distance: [this.isUpdate ? this.data.loadInfo.distance : ''],
      loadType: [this.isUpdate ? this.data.loadInfo.loadType : ''],
      dispatchName: [this.isUpdate ? this.data.loadInfo.dispatchName : ''],
      vehicle: [this.isUpdate ? this.data.loadInfo.vehicle : ''],
      trailerNumber: [this.isUpdate ? this.data.loadInfo.trailerNumber : ''],
      client: [this.isUpdate ? this.data.loadInfo.client : ''],
      note: [this.isUpdate ? this.data.loadInfo.note : ''],
    });
  }

  addVehicle() {
    this.matDialog.open(AddvehicleComponent);
  }

  addClient() {
    this.matDialog.open(AddclientComponent);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: any = await this.loadService.add(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }

}
