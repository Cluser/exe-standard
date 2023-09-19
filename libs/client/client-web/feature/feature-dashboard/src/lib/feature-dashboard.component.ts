import { Component, OnInit } from '@angular/core';
import { FeatureDashboardFacadeService } from './feature-dashboard.facade';

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private featureDashboardFacadeService: FeatureDashboardFacadeService) {}

  ngOnInit(): void {
    this.featureDashboardFacadeService.getToken();
  }

  onLogoutClick(): void {
    this.featureDashboardFacadeService.logout();
  }
}
