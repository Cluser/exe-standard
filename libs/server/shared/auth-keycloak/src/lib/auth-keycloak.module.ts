import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  PolicyEnforcementMode,
  ResourceGuard,
  RoleGuard,
  TokenValidation
} from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:28080',
      realm: 'execode',
      clientId: 'nest-app',
      secret: '8weBurdwP4nLbSZDY3crmMGOX3MHNhVO',
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.OFFLINE
    })
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],
  exports: [KeycloakConnectModule]
})
export class AuthKeycloakModule {}
