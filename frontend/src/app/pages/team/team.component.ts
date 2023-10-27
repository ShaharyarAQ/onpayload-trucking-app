import { Component, ViewChild, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { ApiService } from "src/services/api.service";

import { OnboardComponent } from "src/app/dialogs/onboard/onboard.component";
import { MemberinfoComponent } from "src/app/dialogs/memberinfo/memberinfo.component";
import { AddpayslipComponent } from "src/app/dialogs/addpayslip/addpayslip.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";

@Component({
  selector: "app-team",
  templateUrl: "team.component.html"
})
export class TeamComponent implements OnInit {

  displayedColumns: string[] = ['name', 'joiningDate', 'licenseId', 'jobTitle', 'employmentType', 'contactNumber', 'emailAddress', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allMembers: any = [];
  dataSource: any;

  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }


  async ngOnInit() {
    await this.getAllMembers();
  }

  async getAllMembers() {
    const members: any = await this.apiService.getMembers();
    this.allMembers = members;
    this.dataSource = new MatTableDataSource(this.allMembers);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onboardMember() {
    this.matDialog.open(OnboardComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Team Member Added");
        this.getAllMembers();
      }
    });
  }

  addPayslip() {
    this.matDialog.open(AddpayslipComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Team Member Added");
        this.getAllMembers();
      }
    });

  }

  memberInfo(memberID: any) {
    this.matDialog.open(MemberinfoComponent, {
      data: {
        id: memberID
      },
    });
  }

  async deleteMember(memberID: any) {
    const data: any = await this.apiService.deleteMember(memberID);
    this.snackBar.open("Team Member Deleted");
    this.getAllMembers();
  }


  async deleteDialog(memberID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if (result === 'yes') {
          this.deleteMember(memberID);
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
