import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";


@Component({
  selector: "app-delete",
  templateUrl: "delete.component.html"
})
export class DeleteComponent {
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) { }


  onButtonClicked(buttonId: string) {
    this.dialogRef.close(buttonId);
  }

}
