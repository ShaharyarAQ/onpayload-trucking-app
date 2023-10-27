import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { ApiService } from "src/services/api.service";

import { AddvehicleComponent } from "src/app/dialogs/addvehicle/addvehicle.component";
import { VehicleinfoComponent } from "src/app/dialogs/vehicleinfo/vehicleinfo.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";


@Component({
  selector: "app-fleet",
  templateUrl: "fleet.component.html"
})
export class FleetComponent implements OnInit {

  displayedColumns: string[] = ['unit no.', 'make', 'model', 'year', 'vehicleType', 'assignedDriver', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allVehicles: any = [];
  dataSource: any;

  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
    await this.getAllVehicles();
  }


  async getAllVehicles() {
    const vehicles: any = await this.apiService.getVehicles();
    this.allVehicles = vehicles;
    this.dataSource = new MatTableDataSource(this.allVehicles);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }


  addVehicle() {
    this.matDialog.open(AddvehicleComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Vehicle Added");
        this.getAllVehicles();
      }
    });
  }


  vehicleInfo(vehicleID: any) {
    this.matDialog.open(VehicleinfoComponent, {
      data: {
        id: vehicleID
      },
    });
  }

  updateVehicle(vehicleID: any) {
    this.matDialog.open(AddvehicleComponent, {
      data: {
        id: vehicleID,
        isUpdate: true
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In add vehicle function', data);
        this.getAllVehicles();
      }
    });
  }

  async deleteVehicle(vehicleID: any) {
    const data: any = await this.apiService.deleteVehicle(vehicleID);
    this.snackBar.open("Vehicle Deleted");
    this.getAllVehicles();
  }


  async deleteDialog(vehicleID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result === 'yes') {
          this.deleteVehicle(vehicleID);
        }
        else {
          console.log('The Result was no');
        }
      }
    })
  }

  applyFilter(text: string) {
    this.dataSource.filter = text.trim().toLowerCase();
  }

}
