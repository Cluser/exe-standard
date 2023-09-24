import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorsHandler } from './http-errors-handler.interceptor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    ToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsHandler,
      multi: true
    },
    MessageService
  ],
  exports: [
    ToastModule
  ]
})
export class HttpErrorsHandlerModule {}
