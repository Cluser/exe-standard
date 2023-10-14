import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { LoaderModule } from '@exe/client/client-web/shared/loader'
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    LoaderModule,
    TranslocoModule
  ],
  declarations: [FeatureDashboardComponent],
})
export class FeatureDashboardModule {}
