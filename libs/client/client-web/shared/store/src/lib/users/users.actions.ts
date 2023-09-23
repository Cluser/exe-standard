import { createAction, props } from '@ngrx/store';

const prefix = '[Users]';

export const getUsers = createAction(`${prefix} Get users`);
