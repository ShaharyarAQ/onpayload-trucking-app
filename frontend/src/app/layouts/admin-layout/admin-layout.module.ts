import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "src/services/api.service";


import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from '@angular/material/tabs';



import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { InvoicesComponent } from "../../pages/invoices/invoices.component";
import { MapComponent } from "../../pages/map/map.component";
import { TeamComponent } from "../../pages/team/team.component";
import { LoadsComponent } from "../../pages/loads/loads.component";
import { IncomeComponent } from "src/app/pages/income/income.component";
import { ExpensesComponent } from "../../pages/expenses/expenses.component";
import { FleetComponent } from "src/app/pages/fleet/fleet.component";
import { IFTAComponent } from "src/app/pages/IFTA/IFTA.component";
import { ReportsComponent } from "../../pages/reports/reports.component";
import { W9FormComponent } from "../../pages/w9-form/w9-form.component";
import { W4FormComponent } from "src/app/pages/w4-form/w4-form.component";
import { SubscribeComponent } from "src/app/pages/subscribe/subscribe.component";

import { AddloadComponent } from "src/app/dialogs/addload/addload.component";
import { AddincomeComponent } from "src/app/dialogs/addincome/addincome.component";
import { AddexpenceComponent } from "src/app/dialogs/addexpense/addexpense.component";
import { AddclientComponent } from "src/app/dialogs/addclient/addclient.component";
import { AddinvoiceComponent } from "src/app/dialogs/addinvoice/addinvoice.component";
import { AddvehicleComponent } from "src/app/dialogs/addvehicle/addvehicle.component";
import { AddIFTAComponent } from "src/app/dialogs/addIFTA/addIFTA.component";
import { OnboardComponent } from "src/app/dialogs/onboard/onboard.component";
import { AddpayslipComponent } from "src/app/dialogs/addpayslip/addpayslip.component";

import { LoadinfoComponent } from "src/app/dialogs/loadinfo/loadinfo.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    LoadsComponent,
    ExpensesComponent,
    InvoicesComponent,
    ReportsComponent,
    TeamComponent,
    IFTAComponent,
    MapComponent,
    IncomeComponent,
    W9FormComponent,
    W4FormComponent,
    FleetComponent,
    SubscribeComponent,

    AddloadComponent,
    AddincomeComponent,
    AddexpenceComponent,
    AddclientComponent,
    AddinvoiceComponent,
    AddvehicleComponent,
    AddIFTAComponent,
    OnboardComponent,
    AddpayslipComponent,

    LoadinfoComponent
    // RtlComponent
  ],

  providers: [
    ApiService,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 3500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ["snackbar"],
      }
    }
  ]
})
export class AdminLayoutModule { }
