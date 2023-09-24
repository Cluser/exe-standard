import { createReducer, on, Action } from '@ngrx/store';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import * as fromUsers from './index';

export interface UsersState { 
    users: UserGetResposeDto[], 
    isLoading: boolean, 
    errors: any[]
}

export const initialUsersState: UsersState = {
    users: [],
    isLoading: false,
    errors: []
};

const reducer = createReducer(
    initialUsersState,
    on(fromUsers.fetchUsers, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(fromUsers.fetchUsersSuccess, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            users: [
                ...state.users,
                ...payload
            ],
        };
    }),
    on(fromUsers.fetchUsersFailure, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errors: [
                ...state.errors,
                payload
            ]
        };
    })
);

export function usersReducer(state = initialUsersState, actions: Action) {
    return reducer(state, actions);
}