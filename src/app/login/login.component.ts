import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import {LoginModel} from "./model/login-model";
import {LoginResponse} from "./model/login-response";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {OtpComponent} from "./otp/otp.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  error = false;
  message: string = '';

  constructor(public loginservice: LoginService, private tokenservice: TokenService,
              private router: Router,public dialog: MatDialog) {

    loginservice.listen().subscribe({ next: (data: LoginResponse) => {
        console.log(data);
        this.tokenservice.saveToken(data.token);
        this.tokenservice.storeUserName(data.username);
        this.tokenservice.storeUserId(data.id);
        this.tokenservice.setRoles(data.roles);
        this.callNavigate()
      },
      error: (error: any) => {
        this.message = error.error.message;
        this.error = true;
      }});
  }

  ngOnInit(): void {
  }

  logIn(form: LoginModel): void{

    this.loginservice.login(form).subscribe({
      next: (data: any) => {
       this.loginservice.otp.userId = data.id
       this.getOTPModal()
      },
      error: (error: any) => {
        this.message = error.error.message;
        this.error = true;
      }
    });
  }

  callNavigate(): void{

    if(this.loginservice.userLoggedIn()){
      this.router.navigate(['home']);
    }
  }

  getOTPModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '35%';
    this.dialog.open(OtpComponent, dialogConfig);
  }


}
