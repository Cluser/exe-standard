import { Injectable } from '@angular/core';
import { UsersFacadeService } from '@exe/client/client-web/shared/store';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardFacadeService {

    constructor(
        private keycloakService: KeycloakService,
        private usersFacadeService: UsersFacadeService
    ) {}

    getToken(): void {
        this.keycloakService.getToken().then((token) => {
            console.log(token);
        });
        console.log(this.keycloakService.getUserRoles());
        console.log(this.keycloakService.getUsername());
    }

    fetchUsers(): void {
        return this.usersFacadeService.fetchUsers();
    }

    getUsers(): Observable<UserGetResposeDto[]> {
        return this.usersFacadeService.getUsers();
    }

    logout(): void {
        this.keycloakService.logout();
    }
}