import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { IftaService } from "src/services/ifta.service";
import { ApiService } from "src/services/api.service";

import { AddIFTAComponent } from "src/app/dialogs/addIFTA/addIFTA.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";
import { IFTAinfoComponent } from "src/app/dialogs/IFTAinfo/IFTAinfo.component";
import { IFTAsummaryComponent } from "src/app/dialogs/IFTAsummary/IFTAsummary.component";
import { EditBusinessDetails } from "src/app/dialogs/editBusinessDetails/editBusinessDetails.component";
import { EditIftaSettings } from "src/app/dialogs/editIftaSettings/editIftaSettings.component";
@Component({
  selector: "app-IFTA",
  templateUrl: "IFTA.component.html"
})
export class IFTAComponent implements OnInit {
  constructor(private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private iftaService: IftaService,
    private apiService: ApiService
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allIftas: any = [];
  businessDetails: any;
  iftaSettings: any;
  dataSource: any;

  displayedColumns: string[] = ['date', 'jurisdiction', 'vehicle', 'odometerStart', 'odometerEnd', 'distance', 'fuelPurchased', 'actions'];


  async ngOnInit() {
    await this.getAlliftas();
    await this.getBusinessDetails();
    await this.getIftaSettings();
  }

  async getBusinessDetails() {
    this.businessDetails = await this.apiService.getBusinessDetails();
  }

  async getIftaSettings() {
    this.iftaSettings = await this.apiService.getIftaSettings();
  }

  async getAlliftas() {
    const iftas: any = await this.iftaService.get();
    this.allIftas = iftas;
    this.dataSource = new MatTableDataSource(this.allIftas);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addIfta() {
    this.matDialog.open(AddIFTAComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Ifta Record Added");
        this.getAlliftas();
      }
    });
  }

  iftaInfo(iftaID: any) {
    this.matDialog.open(IFTAinfoComponent, {
      data: {
        id: iftaID
      },
    });
  }

  async updateIfta(iftaID: any) {
    const iftaInfo = await this.iftaService.get(iftaID);
    this.matDialog.open(AddIFTAComponent, {
      data: {
        iftaInfo: iftaInfo,
        isUpdate: true
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In add ifta function', data);
        this.getAlliftas();
      }
    });
  }

  async editBusinessDetails() {
    this.matDialog.open(EditBusinessDetails, {
      data: {
        businessDetails: this.businessDetails,
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In ifta', data);
        this.getBusinessDetails();
      }
    });
  }

  async editIftaSettings() {
    this.matDialog.open(EditIftaSettings, {
      data: {
        iftaSettings: this.iftaSettings,
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In ifta', data);
        this.getIftaSettings();
      }
    });
  }

  async deleteIfta(iftaID: any) {
    const data: any = await this.iftaService.delete(iftaID);
    this.snackBar.open("Ifta Record Deleted");
    this.getAlliftas();
  }

  async deleteDialog(iftaID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result === 'yes') {
          this.deleteIfta(iftaID);
        }
        else {
          console.log('The Result was no');
        }
      }
    })
  }

  IFTAsummary() {
    this.matDialog.open(IFTAsummaryComponent)
  }

  applyFilter(text: string) {
    this.dataSource.filter = text.trim().toLowerCase();
  }
}
