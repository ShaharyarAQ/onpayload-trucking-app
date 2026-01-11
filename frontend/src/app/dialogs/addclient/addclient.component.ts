import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-addclient",
  templateUrl: "addclient.component.html",
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent {

  form: FormGroup;
  memberInfo: any;
  isUpdate: boolean;

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService,
  private dialogRef: MatDialogRef<AddclientComponent>,
  private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required ],
      email: [''],
      contactNumber: ['',Validators.required],
      companyName: [''],
      billingAddress: [''],
      city: [''],
      state: [''],
      zipcode: [''],
      note: [''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.valid) {
      const data: any = await this.apiService.addClient(this.form.value);
      this.dialogRef.close(true);
    } else {
      // error
    }
  }

}
