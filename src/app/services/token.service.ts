import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_NAME = 'user-name';
const USER_ROLES = '';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void{
    localStorage.setItem(USER_KEY,'auth-user');
    localStorage.setItem(USER_NAME,'user-name');
    localStorage.setItem(TOKEN_KEY,'auth-token');
    localStorage.setItem(USER_ROLES,'');
  }
  setRoles(roles : []): void{
    localStorage.removeItem(USER_ROLES);
    localStorage.setItem(USER_ROLES, JSON.stringify(roles))
  }
  getRoles(): []{
    return JSON.parse(USER_ROLES);
  }
  storeUserName(username: any): void{
    localStorage.removeItem(USER_NAME);
    localStorage.setItem(USER_NAME, username);
  }
  public getUserName(): any{
    return localStorage.getItem(USER_NAME);
  }
  storeUserId(userId: any): void{
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, userId);
  }
  public getUserId(): any{
    return localStorage.getItem(USER_KEY);
  }
  public saveToken(token: any): void{
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any{
    return localStorage.getItem(TOKEN_KEY);
  }
  public isLoggedIn(): any{
    return this.getToken();
  }
}
