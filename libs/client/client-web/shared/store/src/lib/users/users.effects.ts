import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromUsers from './index';


@Injectable()
export class UsersEffects {
    constructor(private readonly actions$: Actions) {
    }

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromUsers.getUsers.type),
            switchMap(() => of()),
            map(users => ({ type: '[Users] Get Users Success', payload: [{name: 'Jan', surname: 'Kowalski'}] }))
        )
    );
}