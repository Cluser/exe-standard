/* istanbul ignore file */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDashboardComponent } from '../feature-dashboard.component';

export const routes: Routes = [
  {
    path: 'configuration', 
    component: FeatureDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
