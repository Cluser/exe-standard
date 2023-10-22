import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeatureDashboardFacadeService } from './feature-dashboard.facade';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { Observable } from 'rxjs';
import { MENU_ITEMS, MenuItem } from './menu/menu.model';
import { TOP_BAR_ITEMS } from './top-bar/top-bar.model';
import { MenuItem as Menu} from 'primeng/api';


@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private featureDashboardFacadeService: FeatureDashboardFacadeService) {}

  get users$(): Observable<UserGetResposeDto[]> {
    return this.featureDashboardFacadeService.getUsers$();
  }

  get isUsersLoading$(): Observable<boolean> {
    return this.featureDashboardFacadeService.isUsersLoading$();
  }

  get breadcrumbs(): Menu[] {
    return this.featureDashboardFacadeService.getBreadcrumbs();
  }

  ngOnInit(): void {
    this.featureDashboardFacadeService.getToken();
    this.featureDashboardFacadeService.fetchUsers$();
    this.featureDashboardFacadeService.setLocalStorageData();
    this.featureDashboardFacadeService.getLocalStorageData();
  }

  onMenuItemClick(menuItem: MenuItem): void {
    switch(menuItem) {
      case MENU_ITEMS.ITEM_1: 
        this.featureDashboardFacadeService.navigateToDashboard();
        break;
      case MENU_ITEMS.ITEM_2:
        this.featureDashboardFacadeService.navigateToConfiguration();
        break;
    }
  }

  onTopBarItemClick(item: string): void {
    switch(item) {
      case TOP_BAR_ITEMS.USER_SETTINGS:
        break;
      case TOP_BAR_ITEMS.LOGOUT:
        this.featureDashboardFacadeService.logout();
        break;
    }
  }
}
