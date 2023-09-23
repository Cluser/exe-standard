import { Component, OnInit } from '@angular/core';
import { FeatureDashboardFacadeService } from './feature-dashboard.facade';
import { UsersFacadeService } from '@exe/client/client-web/shared/store';

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private featureDashboardFacadeService: FeatureDashboardFacadeService, private usersFacadeService: UsersFacadeService) {}

  ngOnInit(): void {
    this.featureDashboardFacadeService.getToken();
    this.usersFacadeService.getUsers();
  }

  onLogoutClick(): void {
    this.featureDashboardFacadeService.logout();
  }
}
