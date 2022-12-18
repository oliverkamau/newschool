import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";
import {Otp} from "../model/otp";
import {TokenService} from "../../services/token.service";
import {Route, Router} from "@angular/router";



@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  error = false;
  message = '';

  constructor(public loginService: LoginService, public tokenService: TokenService ,  private router: Router,public dialogbox: MatDialogRef<OtpComponent>) { }

  ngOnInit(): void {
  }
  verifyOtp(value: Otp): void{
    this.loginService.verifyOtp( value).subscribe(
      data => {
        this.closeModal();
        this.tokenService.saveToken(data.token);
        this.tokenService.storeUserName(data.username);
        this.tokenService.storeUserId(data.id);
        this.tokenService.setRoles(data.roles);
        this.callNavigate()
      },
      error => {
        this.message = error.error.message;
        this.loginService.error = true;
  }
    );
  }
  callNavigate(): void{

    if(this.loginService.userLoggedIn()){
      this.router.navigate(['home']);
    }
  }
  closeModal(): void{
    this.dialogbox.close();
    this.resetRoles();
  }
  resetRoles(): void{
    this.loginService.otp = {
      otp: '',
      userId: 0
    };
  }
}
