import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsersFacadeService } from '@exe/client/client-web/core/store';

@Injectable({ providedIn: 'root' })
export class GetUsersResolver implements Resolve<void> {
  constructor(private usersFacadeService: UsersFacadeService) {}

  resolve(): Observable<any> {
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