import { Injectable } from '@angular/core';
import { UsersFacadeService } from '@exe/client/client-web/core/store';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { KeycloakService } from 'keycloak-angular';
import { LocalStorageService, LOCAL_STORAGE } from '@exe/client/client-web/shared/local-storage';
import { Observable } from 'rxjs';
import { NavigationService } from '@exe/client/client-web/shared/navigation';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserProfileModalComponent } from '@exe/client/client-web/shared/modal';
import { SocketIOService } from '@exe/client/shared/socket-io';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardFacadeService {
  constructor(
    private keycloakService: KeycloakService,
    private localStorageService: LocalStorageService,
    private usersFacadeService: UsersFacadeService,
    private navigationService: NavigationService,  
    private dialogService: DialogService,
    private socketIOService: SocketIOService
  ) {}

  ref: DynamicDialogRef | undefined;

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
    // this.socketIOService.connect();
    this.socketIOService.emit('IDENTITY', 'test')
    // this.socketIOService.disconnect();

    this.socketIOService.on('IDENTITY', (data: any) => { console.log(data)})
    return this.navigationService.navigateToConfiguration();
  }

  getBreadcrumbs$(): Observable<string[]> {
    return this.navigationService.getBreadcrumbs$()
  }

  getBreadcrumbs(): MenuItem[] {
    const breadcrumbs: string[] = this.navigationService.getBreadcrumbs();
    return breadcrumbs.map((breadcrumb, index) => {
      return { 
        label: breadcrumb, 
        url: breadcrumbs.slice(0, index + 1).join('/')
      };
    });
  }

  onUsersSettingsClick(): void {
    this.dialogService.open(UserProfileModalComponent, {
      header: 'Edycja profilu użytkownika',
      width: '600px',
      data: {
        user: {
          name: 'John',
          surname: 'Doe'
        }
      },
      draggable: true,
    }).onClose.subscribe(
      (result) => {
        console.log(result)
      }
    );
  }
}