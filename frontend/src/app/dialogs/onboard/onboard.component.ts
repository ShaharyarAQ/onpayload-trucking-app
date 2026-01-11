import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-onboard",
  templateUrl: "onboard.component.html",
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent {

  form: FormGroup;
  memberInfo: any;
  isUpdate: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<OnboardComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      firstName: [this.isUpdate ? this.data.memberInfo.firstName : '', Validators.required],
      lastName: [this.isUpdate ? this.data.memberInfo.lastName : '', Validators.required],
      licenseId: [this.isUpdate ? this.data.memberInfo.licenseId : '', Validators.required],
      contactNumber: [this.isUpdate ? this.data.memberInfo.contactNumber : '', Validators.required],
      emailAddress: [this.isUpdate ? this.data.memberInfo.emailAddress : '', Validators.required],
      emergencyContactNumber: [this.isUpdate ? this.data.memberInfo.emergencyContactNumber : ''],
      mailAddress: [this.isUpdate ? this.data.memberInfo.mailAddress : ''],
      date: [this.isUpdate ? this.data.memberInfo.date : '', Validators.required],
      jobTitle: [this.isUpdate ? this.data.memberInfo.jobTitle : '', Validators.required],
      employmentType: [this.isUpdate ? this.data.memberInfo.employmentType : '', Validators.required],
      file: [null],
      note: [this.isUpdate ? this.data.memberInfo.note : ''],
    });
  }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      // this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.isUpdate) {
      await this.apiService.updateMember(
        this.data.memberInfo.id,
        this.form.value
      );
      this.snackBar.open('Team Member Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        await this.apiService.addMember(this.form.value);
        this.dialogRef.close(true);
      }
    }
  }

}
