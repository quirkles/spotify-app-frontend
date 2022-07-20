import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import {finalize, Observable, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class SetJwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => {
            if(event instanceof HttpResponse) {
              if(event.headers.get("x-set-jwt")) {
                this.authService.updateToken(event.headers.get("x-set-jwt") as string)
              }
            }
          },
        }),
      );
  }
}
