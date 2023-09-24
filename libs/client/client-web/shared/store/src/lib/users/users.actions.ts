import { HttpErrorResponse } from '@angular/common/http';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { createAction, props } from '@ngrx/store';

const prefix = '[Users]';

export const fetchUsers = createAction(`${prefix} Fetch users`);
export const fetchUsersSuccess = createAction(`${prefix} Fetch users success`, props<{ payload: UserGetResposeDto[] }>() );
export const fetchUsersFailure = createAction(`${prefix} Fetch users failure`, props<{ payload: HttpErrorResponse }>() );
