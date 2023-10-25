import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersFacadeService } from '@exe/client/client-web/core/store';

@Injectable({ providedIn: 'root' })
export class GetUsersAlwaysResolver implements Resolve<void> {
  constructor(private usersFacadeService: UsersFacadeService) {}

  resolve(): Observable<any> {
    this.usersFacadeService.clearUsers();
    this.usersFacadeService.fetchUsers();
    return this.usersFacadeService.getUsers$();
  }
}