import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { Login } from "./layouts/login-signup/login.component";
import { Signup } from "./layouts/login-signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { APP_BASE_HREF } from "@angular/common";
import { LoadStatusComponent } from "./pages/load-status/load-status.component";
import { employeePayslipComponent } from "./pages/payslips/employee/employeePayslip.component";
import { independentContractorPayslipComponent } from "./pages/payslips/independent-contractor/independent-contractorPayslip.component";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    Login,
    Signup,
    LoadStatusComponent,
    employeePayslipComponent,
    independentContractorPayslipComponent
  ],
  providers: [ApiService,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 3500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ["snackbar"],
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
