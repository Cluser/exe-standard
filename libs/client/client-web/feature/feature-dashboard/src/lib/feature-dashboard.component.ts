import { Component, OnInit } from '@angular/core';
import { FeatureDashboardFacadeService } from './feature-dashboard.facade';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private featureDashboardFacadeService: FeatureDashboardFacadeService) {}

  get users(): Observable<UserGetResposeDto[]> {
    return this.featureDashboardFacadeService.getUsers();
  }

  ngOnInit(): void {
    this.featureDashboardFacadeService.getToken();
    this.featureDashboardFacadeService.fetchUsers();
    this.featureDashboardFacadeService.setLocalStorageData();
    this.featureDashboardFacadeService.getLocalStorageData();
  }

  onLogoutClick(): void {
    this.featureDashboardFacadeService.logout();
  }
}
