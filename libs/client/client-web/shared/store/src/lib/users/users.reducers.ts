import { createReducer, on, Action } from '@ngrx/store';
import * as fromBooks from './index';

export const initialUsersState = {
    users: [],
    isLoading: false
};

const reducer = createReducer(
    initialUsersState,
    on(fromBooks.getUsers, (state) => {
        return {
            ...state,
            isLoading: true
        };
    })
);

export function usersReducer(state = initialUsersState, actions: Action) {
    return reducer(state, actions);
}