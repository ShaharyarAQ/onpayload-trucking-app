import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { AddclientComponent } from "../addclient/addclient.component";
import { LoadService } from "src/services/load.service";


@Component({
  selector: "app-addload",
  templateUrl: "addload.component.html",
  styleUrls: ['./addload.component.scss']
})
export class AddloadComponent implements OnInit {

  form: FormGroup;
  loadInfo: any;
  isUpdate: boolean;
  date: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private loadService: LoadService,
    private dialogRef: MatDialogRef<AddloadComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.loadInfo.date : '', Validators.required],
      driver: [this.isUpdate ? this.data.loadInfo.driver : '', Validators.required],
      pay: [this.isUpdate ? this.data.loadInfo.pay : '', Validators.required],
      pickupCity: [this.isUpdate ? this.data.loadInfo.pickupCity : '', Validators.required],
      pickupState: [this.isUpdate ? this.data.loadInfo.pickupState : '', Validators.required],
      pickupZipcode: [this.isUpdate ? this.data.loadInfo.pickupZipcode : '', Validators.required],
      destinationCity: [this.isUpdate ? this.data.loadInfo.destinationCity : '', Validators.required],
      destinationState: [this.isUpdate ? this.data.loadInfo.destinationState : '', Validators.required],
      destinationZipcode: [this.isUpdate ? this.data.loadInfo.destinationZipcode : '', Validators.required],
      distance: [this.isUpdate ? this.data.loadInfo.distance : '', Validators.required],
      loadType: [this.isUpdate ? this.data.loadInfo.loadType : '', Validators.required],
      dispatchName: [this.isUpdate ? this.data.loadInfo.dispatchName : ''],
      vehicle: [this.isUpdate ? this.data.loadInfo.vehicle : '', Validators.required],
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

    if (this.isUpdate) {
      const response: any = await this.loadService.update(
        this.data.loadInfo.id,
        this.form.value
      );
      // console.log(response);
      this.snackBar.open('Load Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        const data: any = await this.loadService.add(this.form.value);
        this.dialogRef.close(true);
      } else {
        // error
      }
    }
  }

}
