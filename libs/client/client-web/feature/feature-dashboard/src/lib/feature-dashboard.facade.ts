import { Injectable } from '@angular/core';
import { UsersFacadeService } from '@exe/client/client-web/core/store';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { KeycloakService } from 'keycloak-angular';
import { LocalStorageService, LOCAL_STORAGE } from '@exe/client/client-web/shared/local-storage';
import { Observable } from 'rxjs';
import { NavigationService } from '@exe/client/client-web/shared/navigation';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardFacadeService {
  constructor(
    private keycloakService: KeycloakService,
    private localStorageService: LocalStorageService,
    private usersFacadeService: UsersFacadeService,
    private navigationService: NavigationService
  ) {}

  getToken(): void {
    this.keycloakService.getToken().then((token) => {
      console.log(token);
    });
    console.log(this.keycloakService.getUserRoles());
    console.log(this.keycloakService.getUsername());
  }

  fetchUsers$(): void {
    return this.usersFacadeService.fetchUsers();
  }

  isUsersLoading$(): Observable<boolean> {
    return this.usersFacadeService.isUsersLoading$();
  }

  getUsers$(): Observable<UserGetResposeDto[]> {
    return this.usersFacadeService.getUsers$();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  setLocalStorageData(): void {
    return this.localStorageService.setItem(LOCAL_STORAGE.PARAMETER_01, {
      name: LOCAL_STORAGE.PARAMETER_01,
      value: 'VALUE_01'
    });
  }

  getLocalStorageData(): void {
    return console.log(this.localStorageService.getItem(LOCAL_STORAGE.PARAMETER_01));
  }

  navigateToDashboard(): void {
    return this.navigationService.navigateToDashboard();
  }

  navigateToConfiguration(): void {
    return this.navigationService.navigateToConfiguration();
  }

  getBreadcrumbs$(): Observable<string[]> {
    return this.navigationService.getBreadcrumbs$()
  }

  getBreadcrumbs(): MenuItem[] {
    return this.navigationService.getBreadcrumbs().map(breadcrumb => ({
      label: breadcrumb
    }));
  }
}
