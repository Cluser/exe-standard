import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsers from './index';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

    constructor(private readonly store: Store) {}

    getUsers(): void {
        this.store.dispatch(fromUsers.getUsers())
    }
}