import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { URL_TREE } from '@exe/client/client-web/shared/navigation';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requiredRoles: string[] = route.data['requiredRoles'] as string[];
      const isUserWithAllRequiredRoles: boolean = requiredRoles.every(requiredRole => this.keycloakService.isUserInRole(requiredRole))
      return isUserWithAllRequiredRoles ? true : this.router.navigate([URL_TREE.NOT_AUTHORIZED.URL]);
  }
}