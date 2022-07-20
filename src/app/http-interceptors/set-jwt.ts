import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import {finalize, Observable, tap} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class SetJwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => {
            if(event instanceof HttpResponse) {
              console.log("####\n")
              console.log(event.headers.keys().map(k => {
                `${k}: ${event.headers.getAll(k)}`
              }).join('\n'))
              console.log("####\n")
            }
          },
          // Operation failed; error is an HttpErrorResponse
        }),
        // Log when response observable either completes or errors
      );
  }
}
