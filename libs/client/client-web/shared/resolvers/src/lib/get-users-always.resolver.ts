import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersFacadeService } from '@exe/client/client-web/core/store';

@Injectable({ providedIn: 'root' })
export class GetUsersAlwaysResolver implements Resolve<boolean> {
  constructor(private usersFacadeService: UsersFacadeService) {}

  resolve(): Observable<boolean> {
    this.usersFacadeService.clearUsers();
    this.usersFacadeService.fetchUsers();
    return this.usersFacadeService.isUsersLoaded$();
  }
}

