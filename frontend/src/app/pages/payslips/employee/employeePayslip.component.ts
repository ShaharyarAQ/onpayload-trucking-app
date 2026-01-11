import { Component } from '@angular/core'

@Component({
    selector: "app-employeePayslip",
    templateUrl: "employeePayslip.component.html",
})
export class employeePayslipComponent {
    loadId: string = null;
    loadData: any = null;

    constructor() { }
}
