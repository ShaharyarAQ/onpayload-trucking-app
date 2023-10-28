import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from 'chart.js';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from "src/services/api.service";
import { AddincomeComponent } from "src/app/dialogs/addincome/addincome.component";
import { IncomeinfoComponent } from "src/app/dialogs/incomeinfo/incomeinfo.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";



@Component({
  selector: "app-income",
  templateUrl: "income.component.html"
})
export class IncomeComponent implements OnInit {
  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allIncomes: any = [];
  dataSource: any;


  displayedColumns: string[] = ['date', 'category', 'amount', 'paymentType', 'reference', 'payer', 'actions'];

  async ngOnInit() {


    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Income Chart',
          data: [65, 59, 71, 81, 56, 80, 49, 53, 73, 61, 57, 81],
          backgroundColor: [
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
            'rgba(75, 192, 192)',
          ],
          barPercentage: 0.2,
          gridLines: {
            drawBorder: true,
            display: false
          }
        }],
      },
      options: {
        plugins: {
          legend: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              show: true
            },
            gridLines: {
              drawBorder: true,
              display: false,
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              show: true
            },
            ticks: {
              beginAtZero: true,
              callback: function (value, index, ticks) {
                return '$' + value;
              }
            },
            gridLines: {
              drawBorder: true,
              display: true,

            }
          }]
        },
      }
    });

    await this.getAllIncomes();

  }

  async getAllIncomes() {
    const incomes: any = await this.apiService.getIncomes();
    this.allIncomes = incomes;
    this.dataSource = new MatTableDataSource(this.allIncomes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  addIncome() {
    this.matDialog.open(AddincomeComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Income Added");
        this.getAllIncomes();
      }
    });
  }

  incomeInfo(incomeID: any) {
    this.matDialog.open(IncomeinfoComponent, {
      data: {
        id: incomeID
      },
    });
  }

  async updateIncome(incomeID: any) {
    const incomeInfo = await this.apiService.getIncomeInfo(incomeID);
    this.matDialog.open(AddincomeComponent, {
      data: {
        incomeInfo: incomeInfo,
        isUpdate: true
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In add income function', data);
        this.getAllIncomes();
      }
    });
  }

  async deleteIncome(incomeID: any){
    const data: any = await this.apiService.deleteIncome(incomeID);
    this.snackBar.open("Income Deleted");
    this.getAllIncomes();
  }


  async deleteDialog(incomeID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if(result === 'yes'){
          this.deleteIncome(incomeID);
        }
        else{
          console.log('The Result was no');
        }
      }
    })
  }

  applyFilter(text: string){
    this.dataSource.filter = text.trim().toLowerCase();
  }
}
