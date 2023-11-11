import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IftaService } from "src/services/ifta.service";

@Component({
  selector: "app-addIFTA",
  templateUrl: "addIFTA.component.html",
  styleUrls: ['./addIFTA.component.scss']
})
export class AddIFTAComponent implements OnInit{

  form: FormGroup;
  iftaInfo: any;
  isUpdate: boolean;
  date: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private iftaService: IftaService,
    private dialogRef: MatDialogRef<AddIFTAComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.iftaInfo.date : '', Validators.required],
      jurisdiction: [this.isUpdate ? this.data.iftaInfo.jurisdiction : '', Validators.required],
      tripType: [this.isUpdate ? this.data.iftaInfo.tripType : '', Validators.required],
      vehicle: [this.isUpdate ? this.data.iftaInfo.vehicle : '', Validators.required],
      odometerStart: [this.isUpdate ? this.data.iftaInfo.odometerStart : ''],
      odometerEnd: [this.isUpdate ? this.data.iftaInfo.odometerEnd : ''],
      distance: [this.isUpdate ? this.data.iftaInfo.distance : '', Validators.required],
      nonTaxableDistance: [this.isUpdate ? this.data.iftaInfo.nonTaxableDistance : ''],
      tollMiles: [this.isUpdate ? this.data.iftaInfo.tollMiles : ''],
      nonTollMiles: [this.isUpdate ? this.data.iftaInfo.nonTollMiles : ''],
      fuelPurchased: [this.isUpdate ? this.data.iftaInfo.fuelPurchased : '', Validators.required],
      note: [this.isUpdate ? this.data.iftaInfo.note : ''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {

    if (this.isUpdate) {
      const response: any = await this.iftaService.update(
        this.data.iftaInfo.id,
        this.form.value
      );
      // console.log(response);
      this.snackBar.open('Ifta Record Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        const data: any = await this.iftaService.add(this.form.value);
        this.dialogRef.close(true);
      } else {
        // error
      }
    }
  }

}
