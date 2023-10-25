import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducers';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(selectUsersState, (state) => state.users.data!);
export const selectUsersIsLoading = createSelector(selectUsersState, (state) => state.users.isLoading);
export const selectUsersIsLoaded = createSelector(selectUsersState, (state) => state.users.isLoaded);
export const selectUsersErrors = createSelector(selectUsersState, (state) => state.users.errors);
