import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from '@exe/client/shared/data-access';
import * as fromUsers from './index';

@Injectable()
export class UsersEffects {
  constructor(private readonly actions$: Actions, private api: AppService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsers.fetchUsers.type),
      switchMap(() => this.api.userControllerGetUsers()),
      map((users) => fromUsers.fetchUsersSuccess({ payload: users.data })),
      catchError((error) => of(fromUsers.fetchUsersFailure({ payload: error })))
    )
  );
}
