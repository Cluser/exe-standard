import { Injectable } from '@angular/core';
import { AppService, UserGetDto } from '@exe/client/shared/data-access';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardFacadeService {

    constructor(
        private api: AppService, 
        private keycloakService: KeycloakService
    ) {}

    getToken(): void {
        this.api.userControllerGetUsers(0, '',  '').subscribe((users) => {
            console.log(users);
            this.keycloakService.getToken().then((token) => {
                console.log(token);
            });
        
            console.log(this.keycloakService.getUserRoles());
            console.log(this.keycloakService.getUsername());
        });   
    }

    logout(): void {
        this.keycloakService.logout();
    }
}