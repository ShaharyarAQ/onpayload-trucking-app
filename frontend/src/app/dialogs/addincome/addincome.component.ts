import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from "src/services/api.service";
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";



@Component({
  selector: "app-addincome",
  templateUrl: "addincome.component.html",
  styleUrls: ['./addincome.component.scss']
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
    private snackBar: MatSnackBar
  ) { }


  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.incomeInfo.date : '', Validators.required],
      reference: [this.isUpdate ? this.data.incomeInfo.reference : ''],
      payer: [this.isUpdate ? this.data.incomeInfo.payer : ''],
      amount: [this.isUpdate ? this.data.incomeInfo.amount : '', Validators.required],
      paymentType: [this.isUpdate ? this.data.incomeInfo.paymentType : ''],
      processedBy: [this.isUpdate ? this.data.incomeInfo.processedBy : ''],
      incomeCategory: [this.isUpdate ? this.data.incomeInfo.incomeCategory : '', Validators.required],
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

    if (this.isUpdate) {
      const response: any = await this.apiService.updateIncome(
        this.data.incomeInfo.id,
        this.form.value
      );
      // console.log(response);
      this.snackBar.open('Income Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        const data: any = await this.apiService.addIncome(this.form.value);
        this.dialogRef.close(true);
      } else {
        // error
      }
    }
  }

}
