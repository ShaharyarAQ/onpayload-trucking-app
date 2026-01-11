import { Component, Inject, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: "app-editBusinessDetails",
    templateUrl: "editBusinessDetails.component.html",
})
export class EditBusinessDetails implements OnInit {

    form: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditBusinessDetails>,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.form = this.formBuilder.group({
            businessName: [this.data.businessDetails.businessName],
            ein: [this.data.businessDetails.ein],
            address: [this.data.businessDetails.address],
        });
    }

    async onSubmit() {
        const response: any = await this.apiService.editBusinessDetails(this.form.value);
        this.snackBar.open('Business details updated');
        this.dialogRef.close(true);
    }

}
