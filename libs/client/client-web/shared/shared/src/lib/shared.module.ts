import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthKeycloakModule } from '@exe/client/client-web/shared/auth-keycloak';
import { NgrxStoreModule } from '@exe/client/client-web/shared/store';
import { HttpErrorsHandlerModule } from '@exe/client/client-web/shared/http-errors-handler';
import { LoaderModule } from '@exe/client/client-web/shared/loader';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthKeycloakModule,
    NgrxStoreModule,
    HttpErrorsHandlerModule,
    LoaderModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthKeycloakModule,
    NgrxStoreModule,
    HttpErrorsHandlerModule,
    LoaderModule
  ]
})
export class SharedModule {}
