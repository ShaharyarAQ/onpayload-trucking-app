import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-onboard",
  templateUrl: "onboard.component.html"
})
export class OnboardComponent {

  form: FormGroup;
  memberInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<OnboardComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      firstName: [this.isUpdate ? this.data.memberInfo.firstName : ''],
      lastName: [this.isUpdate ? this.data.memberInfo.lastName : ''],
      licenseId: [this.isUpdate ? this.data.memberInfo.licenseId : ''],
      contactNumber: [this.isUpdate ? this.data.memberInfo.contactNumber : ''],
      emailAddress: [this.isUpdate ? this.data.memberInfo.emailAddress : ''],
      emergencyContactNumber: [this.isUpdate ? this.data.memberInfo.emergencyContactNumber : ''],
      mailAddress: [this.isUpdate ? this.data.memberInfo.mailAddress : ''],
      date: [this.isUpdate ? this.data.memberInfo.date : ''],
      jobTitle: [this.isUpdate ? this.data.memberInfo.jobTitle : ''],
      employmentType: [this.isUpdate ? this.data.memberInfo.employmentType : ''],
      note: [this.isUpdate ? this.data.memberInfo.note : ''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: any = await this.apiService.addMember(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }

}
