import { Component, OnInit } from '@angular/core';
import { FeatureDashboardFacadeService } from './feature-dashboard.facade';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { Observable } from 'rxjs';
import { MenuItem } from './menu/menu.model';

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss']
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private featureDashboardFacadeService: FeatureDashboardFacadeService) {}

  get users$(): Observable<UserGetResposeDto[]> {
    return this.featureDashboardFacadeService.getUsers$();
  }

  get isUsersLoading$(): Observable<boolean> {
    return this.featureDashboardFacadeService.isUsersLoading$();
  }

  ngOnInit(): void {
    this.featureDashboardFacadeService.getToken();
    this.featureDashboardFacadeService.fetchUsers$();
    this.featureDashboardFacadeService.setLocalStorageData();
    this.featureDashboardFacadeService.getLocalStorageData();
  }

  onMenuItemClick(menuItem: MenuItem): void {
    switch(menuItem) {
      case 'ITEM_1':
        break;
      case 'ITEM_2':
        break;
    }
  }

  onTopBarItemClick(item: string): void {
    switch(item) {
      case 'UserSettings':
        break;
      case 'LOGOUT':
        this.featureDashboardFacadeService.logout();
        break;
    }
  }
}
