import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from "src/services/api.service";
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";



@Component({
  selector: "app-addincome",
  templateUrl: "addincome.component.html"
})
export class AddincomeComponent implements OnInit {

  form: FormGroup;
  vehicleInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddincomeComponent>,
  ) { }


  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.incomeInfo.date : ''],
      reference: [this.isUpdate ? this.data.incomeInfo.reference : ''],
      payer: [this.isUpdate ? this.data.incomeInfo.payer : ''],
      amount: [this.isUpdate ? this.data.incomeInfo.amount : ''],
      paymentType: [this.isUpdate ? this.data.incomeInfo.paymentType : ''],
      processedBy: [this.isUpdate ? this.data.incomeInfo.processedBy : ''],
      incomeCategory: [this.isUpdate ? this.data.incomeInfo.incomeCategory : ''],
      vehicle: [this.isUpdate ? this.data.incomeInfo.vehicle : ''],
      note: [this.isUpdate ? this.data.incomeInfo.note : ''],
    });
  }

  addVehicle() {
    this.matDialog.open(AddvehicleComponent)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: any = await this.apiService.addIncome(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }

}
