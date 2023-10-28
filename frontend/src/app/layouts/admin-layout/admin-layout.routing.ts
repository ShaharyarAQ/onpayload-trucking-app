import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { InvoicesComponent } from "../../pages/invoices/invoices.component";
import { MapComponent } from "../../pages/map/map.component";
import { TeamComponent } from "../../pages/team/team.component";
import { LoadsComponent } from "../../pages/loads/loads.component";
import { IncomeComponent } from "src/app/pages/income/income.component";
import { FleetComponent } from "src/app/pages/fleet/fleet.component";
import { ExpensesComponent } from "../../pages/expenses/expenses.component";
import { IFTAComponent } from "src/app/pages/IFTA/IFTA.component";
import { ReportsComponent } from "../../pages/reports/reports.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "income", component: IncomeComponent },
  { path: "map", component: MapComponent },
  { path: "team", component: TeamComponent },
  { path: "loads", component: LoadsComponent },
  { path: "expenses", component: ExpensesComponent },
  { path: "invoices", component: InvoicesComponent },
  { path: "fleet", component: FleetComponent },
  { path: "IFTA", component: IFTAComponent },
  { path: "reports", component: ReportsComponent },
];
