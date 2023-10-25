import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsersErrors, selectUsers, selectUsersIsLoading, selectUsersIsLoaded } from './users.selectors';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { HttpErrorResponse } from '@angular/common/http';
import * as fromUsers from './index';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {
  constructor(private readonly store: Store) {}

  clearUsers(): void {
    return this.store.dispatch(fromUsers.clearUsers());
  }

  fetchUsers(): void {
    return this.store.dispatch(fromUsers.fetchUsers());
  }

  isUsersLoading$(): Observable<boolean> {
    return this.store.select(selectUsersIsLoading);
  }

  isUsersLoaded$(): Observable<boolean> {
    return this.store.select(selectUsersIsLoaded);
  }

  getUsers$(): Observable<UserGetResposeDto[]> {
    return this.store.select(selectUsers);
  }

  getUsersErrors$(): Observable<HttpErrorResponse[]> {
    return this.store.select(selectUsersErrors);
  }
}
