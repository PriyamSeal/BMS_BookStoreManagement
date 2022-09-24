import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestapiService } from "./restapi.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{   
    constructor(private service:RestapiService)
    {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        let newReq=req;
        let token=this.service.getToken();

        if(token!=null)
        {
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }
        
        return next.handle(newReq);
    }
    
}