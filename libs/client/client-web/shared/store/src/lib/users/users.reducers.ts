import { createReducer, on, Action } from '@ngrx/store';
import * as fromUsers from './index';

export const initialUsersState = {
    users: [],
    isLoading: false
};

const reducer = createReducer(
    initialUsersState,
    on(fromUsers.getUsers, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(fromUsers.getUsersSuccess, (state, props) => {
        return {
            ...state,
            isLoading: false,
            users: [],
        };
    })
);

export function usersReducer(state = initialUsersState, actions: Action) {
    return reducer(state, actions);
}