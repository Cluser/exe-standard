import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { createAction, props } from '@ngrx/store';

const prefix = '[Users]';

export const getUsers = createAction(`${prefix} Get users`);
export const getUsersSuccess = createAction(`${prefix} Get users success`, props<UserGetResposeDto>() );
