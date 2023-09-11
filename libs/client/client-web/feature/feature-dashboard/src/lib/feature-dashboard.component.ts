import { Component, OnInit } from '@angular/core';
import { AppService } from '@exe/client/shared/data-access';
import { KeycloakService } from 'keycloak-angular'

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private api: AppService, private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.api.userControllerGetUsers().subscribe((users) => {
      console.log(users);
      this.keycloakService.getToken().then((token) => {
        console.log(token);
      });

      console.log(this.keycloakService.getUserRoles());
      console.log(this.keycloakService.getUsername());
    });   
  }

  onLogoutClick(): void {
    this.keycloakService.logout();
  }

  
}
