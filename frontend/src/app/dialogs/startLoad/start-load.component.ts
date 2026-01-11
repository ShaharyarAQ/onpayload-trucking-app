import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-start-load",
  templateUrl: "start-load.component.html"
})
export class StartLoadComponent {
  constructor(
    public dialogRef: MatDialogRef<StartLoadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }

  onButtonClicked(buttonId: string) {
    this.snackBar.open('Email has been sent to the Driver');
    this.dialogRef.close(buttonId);
  }

}
