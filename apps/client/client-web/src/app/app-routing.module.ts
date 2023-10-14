/* istanbul ignore file */
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@exe/client/client-web/feature/feature-dashboard').then((m) => m.FeatureDashboardModule)
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
