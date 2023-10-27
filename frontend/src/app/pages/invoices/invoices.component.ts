import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddinvoiceComponent } from "src/app/dialogs/addinvoice/addinvoice.component";
import { InvoiceinfoComponent } from "src/app/dialogs/invoiceinfo/invoiceinfo.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";


@Component({
  selector: "app-invoices",
  templateUrl: "invoices.component.html"
})
export class InvoicesComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  addInvoice(){
    this.matDialog.open(AddinvoiceComponent);
  }

  invoiceInfo(){
    this.matDialog.open(InvoiceinfoComponent);
  }

  delete(){
    this.matDialog.open(DeleteComponent);
  }
}
