import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducers';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(selectUsersState, (state) => state.users);
export const selectUsersIsLoading = createSelector(selectUsersState, (state) => state.isLoading);
export const selectUsersIsLoaded = createSelector(selectUsersState, (state) => state.isLoaded);
export const selectUsersErrors = createSelector(selectUsersState, (state) => state.errors);
