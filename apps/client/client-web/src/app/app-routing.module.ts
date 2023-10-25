/* istanbul ignore file */

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { URL_TREE } from '@exe/client/client-web/shared/navigation';

export const appRoutes: Route[] = [
  {
    path: '', 
    redirectTo: URL_TREE.DASHBOARD.URL, 
    pathMatch: 'full'
  },
  {
    path: URL_TREE.DASHBOARD.URL,
    loadChildren: () => import('@exe/client/client-web/feature/feature-dashboard').then((m) => m.FeatureDashboardModule)
  },
  {
    path: URL_TREE.NOT_AUTHORIZED.URL,
    loadChildren: () => import('@exe/client/client-web/shared/not-authorized').then((m) => m.NotAuthorizedModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('@exe/client/client-web/shared/not-found').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
