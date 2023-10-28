import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "src/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})

export class Login implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      emailAddress: [''],
      password: [''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async login() {
    const data: any = await this.authService.login(this.form.value);
    console.log(data);
    // this.router.navigate(['/dashboard']);
  }

  // async onSubmit() {
  //   if (this.form.valid) {
  //     const data: any = await this.apiService.addExpense(this.form.value);
  //     this.dialogRef.close(true);
  //   } else {
  //     // error
  //   }
  // }
}