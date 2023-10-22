import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { URL_TREE } from './navigation.model'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
    constructor(private router: Router) { }

    // Gets current url as string
    getCurrentUrl(): string {
        return this.router.url;
    }

    // Gets current url as observable string
    getCurrentUrl$(): Observable<string> {
        return this.router.events.pipe(
            map(() => this.router.url)
        );   
    }

    // Gets current breadcrumbs as string array
    getBreadcrumbs(): string[] {
        return this.getCurrentUrl().split('/').filter(segment => segment.length)
    }

    // Gets current breadcrumbs as observable string array
    getBreadcrumbs$(): Observable<string[]> {
        return this.getCurrentUrl$().pipe(
            map(currentUrl => currentUrl.split('/').filter(segment => segment.length)),
        );
    }

    // Navigates to specified path
    navigateTo(path: (string | number)[], navigationExtras?: NavigationExtras): void {
        this.router.navigate(path, navigationExtras);
    }


    /////////////////////////////////// 
    // APPLICATION SPECIFIC NAVIGATION 
    /////////////////////////////////// 

    navigateToDashboard(): void {
        this.navigateTo([
            URL_TREE.DASHBOARD.URL
        ]);
    }

    navigateToConfiguration(): void {
        this.navigateTo([
            URL_TREE.DASHBOARD.URL,
            URL_TREE.DASHBOARD.CONFIGURATION.URL
        ]);
    }
}