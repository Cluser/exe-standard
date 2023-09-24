import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorsHandler implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('error occurred:', error);
          this.showToastError(error);
          return throwError(() => error);
        })
      );
  }

  showToastError(error: HttpErrorResponse): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.getErrorMessage(error) });
  }

  getErrorMessage(error: HttpErrorResponse): string {
    switch(error.status) {
        case 0: 
            return `Not connected`
        case 400:
            return `Bad request`
        case 401:
            return `You are unauthorized to do this action`
        case 403:
            return `You don't have permission to access the requested resource`
        case 404:
            return `The requested resource does not exist`
        case 412:
            return `Precondition failed`
        case 500:
            return `Internal server error`
        case 503:
            return `The requested service is not available`
        default:
            return 'Something went wrong!'
      }
  }
}