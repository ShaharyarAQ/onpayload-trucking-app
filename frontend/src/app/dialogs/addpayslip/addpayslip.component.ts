import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-addpayslip",
  templateUrl: "addpayslip.component.html",
  styleUrls: ['./addpayslip.component.scss']
})
export class AddpayslipComponent {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddpayslipComponent>,
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
        teamMember: ['',Validators.required],
        compensationType: ['',Validators.required ],
        startDate: ['',Validators.required],
        endDate: ['',Validators.required],
        paymentDate: ['',Validators.required],
        paymentRate: [''],
        paymentAmount: [''],
        deductions: ['', Validators.required],
        paymentType: ['',Validators.required],
        reference: ['',Validators.required],
        note: [''],
      });
    }

    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }

    async onSubmit() {
      if (this.form.valid) {
        // const data: any = await this.apiService.addMember(this.form.value);
        // this.dialogRef.close(true);
        console.log(this.form.value);
      } else {
        // error
      }
    }

}
