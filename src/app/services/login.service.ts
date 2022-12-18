import { Injectable } from '@angular/core';
import {LoginModel} from "../login/model/login-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../login/model/login-response";
import {MasterUrl} from "../shared/master-url";
import {TokenService} from "./token.service";
import {Otp} from "../login/model/otp";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private listeners = new Subject<any>();
  error: boolean = false;
  isLoggedIn: boolean = false;
  form: LoginModel = {username : "",password : ""};
  otp: Otp = {otp : "", userId : 0};
  roles: any[] = [];
  requestHeaders = new HttpHeaders({ "No-Auth":"True"});
  readonly APIURL = MasterUrl.baseUrl + 'service/';
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(form: LoginModel): Observable<any>{

    return this.http.post<LoginResponse>(this.APIURL + 'authenticate', form, {headers : this.requestHeaders});

  }

  userLoggedIn(): boolean{

    const log = this.tokenService.getToken();
    this.isLoggedIn = !(log === 'auth-token' || log == null);
    return this.isLoggedIn;

  }

  verifyOtp(value: Otp): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.APIURL + 'validateotp', value, {headers : this.requestHeaders});

  }
  listen(): Observable<any>{
    return this.listeners.asObservable();
  }
  filter(filterBy: any): void{
    this.listeners.next(filterBy);
  }
}
