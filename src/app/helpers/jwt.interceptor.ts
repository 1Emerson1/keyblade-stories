import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let JWT = localStorage.getItem('ACCESS_TOKEN');
        if (JWT) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `JWT ${JWT}`
                }
            });
        }

        return next.handle(request);
    }
}