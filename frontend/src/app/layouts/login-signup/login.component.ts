import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "src/services/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})

export class Login implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
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
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      this.snackBar.open('Welcome');
      this.router.navigate(['/dashboard']);
    }
     else {
      this.snackBar.open('Wrong Credentials!');
      localStorage.clear();
    }
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