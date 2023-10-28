import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from 'chart.js';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from "src/services/api.service";

import { AddexpenceComponent } from "src/app/dialogs/addexpense/addexpense.component";
import { ExpenseinfoComponent } from "src/app/dialogs/expenseinfo/expenseinfo.component";
import { DeleteComponent } from "src/app/dialogs/delete/delete.component";


@Component({
  selector: "app-expenses",
  templateUrl: "expenses.component.html"
})
export class ExpensesComponent implements OnInit {
  constructor(private matDialog: MatDialog,
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allExpenses: any = [];
  dataSource: any;

  displayedColumns: string[] = ['date', 'paymentType', 'paymentReference', 'payee', 'amount', 'category','paidBy', 'actions'];

  async ngOnInit() {
    new Chart("barchart2", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Expenses Chart',
          data: [65, 59, 58, 71, 56, 55, 49, 65, 59, 75, 81, 56],
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
          ],
          borderWidth: 1,
          barPercentage: 0.2,
          categoryPercenatge: 0.5
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
              drawBorder: false,
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

    await this.getAllExpenses();

  }

  async getAllExpenses() {
    const expenses: any = await this.apiService.getExpenses();
    this.allExpenses = expenses;
    this.dataSource = new MatTableDataSource(this.allExpenses);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addExpense() {
    this.matDialog.open(AddexpenceComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.snackBar.open("Expense Added");
        this.getAllExpenses();
      }
    });
  }

  expenseInfo(expenseID: any) {
    this.matDialog.open(ExpenseinfoComponent, {
      data: {
        id: expenseID
      },
    });
  }

  async updateExpense(expenseID: any) {
    const expenseInfo = await this.apiService.getExpenseInfo(expenseID);
    this.matDialog.open(AddexpenceComponent, {
      data: {
        expenseInfo: expenseInfo,
        isUpdate: true
      },
    }).afterClosed().subscribe((data) => {
      if (data) {
        console.log('In add expense function', data);
        this.getAllExpenses();
      }
    });
  }

  async deleteExpense(expenseID: any){
    const data: any = await this.apiService.deleteExpense(expenseID);
    this.snackBar.open("Expense Deleted");
    this.getAllExpenses();
  }


  async deleteDialog(expenseID: any) {
    const dialogRef = this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        if(result === 'yes'){
          this.deleteExpense(expenseID);
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
