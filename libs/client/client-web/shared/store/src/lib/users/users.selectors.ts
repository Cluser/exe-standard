import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectUsersState = createFeatureSelector<any>('users');
export const selectUsersList = createSelector(selectUsersState, (state) => state.users);
export const selectUsersIsLoading = createSelector(selectUsersState, (state) => state.isLoading);