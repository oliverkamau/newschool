import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../services/token.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{


  constructor(private tokenService: TokenService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.get("No-Auth") === 'True') {

      return next.handle(req.clone());

    }
    const token = this.tokenService.getToken();
    req = AuthInterceptor.addToken(req,token)
    return next.handle(req).pipe(
      catchError ((err: HttpErrorResponse) => {

        console.log(err.status);
        if(err.status === 401){
          this.tokenService.signOut();
           this.router.navigate(['/login'])
        }else if(err.status === 403){
          this.tokenService.signOut();
          this.router.navigate(['/login'])
        }
        throw err;
      })


    );
  }
    private static addToken(request: HttpRequest<any>, token: string){

     return request.clone(
       {
       setHeaders : {
         Authorization : "Bearer "+token
       }
     });
    }




}

