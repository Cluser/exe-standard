import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { RouterModule } from '@angular/router';
import { featureDashboardRoutes } from './feature-dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureDashboardRoutes)
  ],
  declarations: [FeatureDashboardComponent],
})
export class FeatureDashboardModule {}
