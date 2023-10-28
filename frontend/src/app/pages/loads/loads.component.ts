import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { LoadService } from "src/services/load.service";

import { AddloadComponent } from "src/app/dialogs/addload/addload.component";
import { LoadinfoComponent } from "src/app/dialogs/loadinfo/loadinfo.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";


@Component({
  selector: "app-loads",
  templateUrl: "loads.component.html"
})
export class LoadsComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private loadService: LoadService
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allLoads: any = [];
  dataSource: any;

  displayedColumns: string[] = ['date', 'client', 'pickup', 'destination', 'milage', 'pay', 'RPM', 'status', 'actions'];

  async ngOnInit() {
    await this.getAllLoads();
  }

  async getAllLoads() {
    const loads: any = await this.loadService.get();
    this.allLoads = loads;
    this.dataSource = new MatTableDataSource(this.allLoads);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addLoad() {
    this.matDialog.open(AddloadComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Load Created");
        this.getAllLoads();
      }
    });
  }

  loadInfo(loadID: any) {
    this.matDialog.open(LoadinfoComponent, {
      data: {
        id: loadID
      },
    });
  }

  async updateLoad(loadID: any) {
    const loadInfo = await this.loadService.get(loadID);
    this.matDialog.open(AddloadComponent, {
      data: {
        loadInfo: loadInfo,
        isUpdate: true
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In add load function', data);
        this.getAllLoads();
      }
    });
  }

  async deleteLoad(loadID: any) {
    const data: any = await this.loadService.delete(loadID);
    this.snackBar.open("Load Deleted");
    this.getAllLoads();
  }

  async deleteDialog(loadID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result === 'yes') {
          this.deleteLoad(loadID);
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
