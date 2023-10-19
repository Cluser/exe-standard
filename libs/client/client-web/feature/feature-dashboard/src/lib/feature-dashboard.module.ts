import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { LoaderModule } from '@exe/client/client-web/shared/loader'
import { TranslocoModule } from '@ngneat/transloco';
import { MenuModule } from './menu/menu.module'
import { TopBarModule } from './top-bar/top-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    LoaderModule,
    TranslocoModule,
    MenuModule,
    TopBarModule
  ],
  declarations: [FeatureDashboardComponent],
})
export class FeatureDashboardModule {}
