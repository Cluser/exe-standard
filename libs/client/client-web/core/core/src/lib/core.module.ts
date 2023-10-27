import { SocketIOModule } from './../../../../../shared/socket-io/src/lib/socket-io.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthKeycloakModule } from '@exe/client/client-web/core/auth-keycloak';
import { NgrxStoreModule } from '@exe/client/client-web/core/store';
import { HttpErrorsHandlerModule } from '@exe/client/client-web/core/http-errors-handler';
import { TranslocoRootModule } from '@exe/client/client-web/core/transloco';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthKeycloakModule,
    NgrxStoreModule,
    HttpErrorsHandlerModule,
    TranslocoRootModule,
    SocketIOModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthKeycloakModule,
    NgrxStoreModule,
    HttpErrorsHandlerModule,
    TranslocoRootModule,
    SocketIOModule
  ]
})
export class CoreModule {}
