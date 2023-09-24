import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsersErrors, selectUsers, selectUsersIsLoading } from './users.selectors';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { HttpErrorResponse } from '@angular/common/http';
import * as fromUsers from './index';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

    constructor(private readonly store: Store) {}

    fetchUsers(): void {
        return this.store.dispatch(fromUsers.fetchUsers())
    }

    isUsersLoading$(): Observable<boolean> {
        return this.store.select(selectUsersIsLoading)
    }

    getUsers$(): Observable<UserGetResposeDto[]> {
        return this.store.select(selectUsers)
    }

    getUsersErrors$(): Observable<HttpErrorResponse[]> {
        return this.store.select(selectUsersErrors)
    }

}