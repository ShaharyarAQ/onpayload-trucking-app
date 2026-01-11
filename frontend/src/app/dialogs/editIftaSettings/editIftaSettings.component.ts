import { Component, Inject, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: "app-editIftaSettings",
    templateUrl: "editIftaSettings.component.html",
})
export class EditIftaSettings implements OnInit {

    form: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditIftaSettings>,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.form = this.formBuilder.group({
            jurisdiction: [this.data.iftaSettings.jurisdiction],
            iftaIdNumber: [this.data.iftaSettings.iftaIdNumber],
            signingAuthority: [this.data.iftaSettings.signingAuthority],
            title: [this.data.iftaSettings.title],
        });
    }

    async onSubmit() {
        const response: any = await this.apiService.editIftaSettings(this.form.value);
        this.snackBar.open('IFTA settings updated');
        this.dialogRef.close(true);
    }

}
