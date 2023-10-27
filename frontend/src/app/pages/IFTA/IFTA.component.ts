import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddIFTAComponent } from "src/app/dialogs/addIFTA/addIFTA.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";
import { IFTAinfoComponent } from "src/app/dialogs/IFTAinfo/IFTAinfo.component";
import { IFTAsummaryComponent } from "src/app/dialogs/IFTAsummary/IFTAsummary.component";


@Component({
  selector: "app-IFTA",
  templateUrl: "IFTA.component.html"
})
export class IFTAComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {}

  addIFTA(){
    this.matDialog.open(AddIFTAComponent)
  }

  IFTAinfo(){
    this.matDialog.open(IFTAinfoComponent)
  }

  delete(){
    this.matDialog.open(DeleteComponent)
  }

  IFTAsummary(){
    this.matDialog.open(IFTAsummaryComponent)
  }
}
