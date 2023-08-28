import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:28080',
        realm: 'execode',
        clientId: 'nest-app'
      },
      initOptions: {
        onLoad: 'login-required'
      }
    });
}

@NgModule({
  imports: [CommonModule, KeycloakAngularModule],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  exports: [KeycloakAngularModule]
})
export class AuthKeycloakModule {}
