/* istanbul ignore file */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDashboardComponent } from '../feature-dashboard.component';
import { RoleGuard } from '@exe/client/client-web/shared/guards';

export const routes: Routes = [
  {
    path: 'configuration', 
    component: FeatureDashboardComponent,
    canActivate: [RoleGuard],
    data: {
      requiredRoles: ['adminn']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
