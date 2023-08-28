import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@exe/client/client-web/feature/feature-dashboard').then(m => m.FeatureDashboardModule)
    }
];
