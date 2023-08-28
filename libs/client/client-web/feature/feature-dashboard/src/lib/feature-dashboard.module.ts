import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule
  ],
  declarations: [FeatureDashboardComponent],
})
export class FeatureDashboardModule {}
