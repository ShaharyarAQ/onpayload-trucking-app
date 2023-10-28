import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from "src/services/api.service";
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";


@Component({
  selector: "app-addexpence",
  templateUrl: "addexpense.component.html"
})
export class AddexpenceComponent implements OnInit {

  form: FormGroup;
  expenseInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddvehicleComponent>,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.expenseInfo.date : ''],
      reference: [this.isUpdate ? this.data.expenseInfo.reference : ''],
      paidBy: [this.isUpdate ? this.data.expenseInfo.paidBy : ''],
      amount: [this.isUpdate ? this.data.expenseInfo.amount : ''],
      paymentType: [this.isUpdate ? this.data.expenseInfo.paymentType : ''],
      payee: [this.isUpdate ? this.data.expenseInfo.payee : ''],
      expenseCategory: [this.isUpdate ? this.data.expenseInfo.expenseCategory : ''],
      vehicle: [this.isUpdate ? this.data.expenseInfo.vehicle : ''],
      note: [this.isUpdate ? this.data.expenseInfo.note : ''],
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
      const data: any = await this.apiService.addExpense(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }

}
