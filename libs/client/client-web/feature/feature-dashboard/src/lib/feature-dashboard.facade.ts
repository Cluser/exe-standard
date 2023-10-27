import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { NavigationService } from '@exe/client/client-web/shared/navigation';
import { UserProfileModalComponent } from '@exe/client/client-web/shared/modal';

@Injectable({
  providedIn: 'root'
})
export class FeatureDashboardFacadeService {
  constructor(
    private keycloakService: KeycloakService,
    private navigationService: NavigationService,  
    private dialogService: DialogService
  ) {}

  logout(): void {
    this.keycloakService.logout();
  }

  navigateToDashboard(): void {
    return this.navigationService.navigateToDashboard();
  }

  navigateToConfiguration(): void {
    return this.navigationService.navigateToConfiguration();
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
    }).onClose.subscribe((result) => {
        console.log(result)
      }
    );
  }
}