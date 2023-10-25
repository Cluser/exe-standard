import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsersFacadeService } from '@exe/client/client-web/core/store';

@Injectable({ providedIn: 'root' })
export class GetUsersResolver implements Resolve<boolean> {
  constructor(private usersFacadeService: UsersFacadeService) {}

  resolve(): Observable<boolean> {
    return this.usersFacadeService.isUsersLoaded$().pipe(
      map(isUsersLoaded => {
        if (!isUsersLoaded) {
          this.usersFacadeService.fetchUsers();
        }
        return isUsersLoaded
      })
    )
  }
}