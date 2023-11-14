import { createReducer, on, Action } from '@ngrx/store';
import { UserGetResposeDto } from '@exe/client/shared/data-access';
import { ApiResponseState, initialApiResponseState } from '../store.model';
import * as fromUsers from './index';

export interface UsersState {
  users: ApiResponseState<UserGetResposeDto[]>;
}

export const initialUsersState: UsersState = {
  users: initialApiResponseState
};

const reducer = createReducer(
  initialUsersState,
  on(fromUsers.clearUsers, (state) => {
    return {
      ...state,
      users: initialUsersState.users
    };
  }),
  on(fromUsers.fetchUsers, (state) => {
    return {
      ...state,
      users: {
        ...state.users,
        isLoading: true,
        isLoaded: false
      }
    };
  }),
  on(fromUsers.fetchUsersSuccess, (state, { payload }) => {
    return {
      ...state,
      users: {
        ...state.users,
        isLoading: false,
        isLoaded: true,
        data: payload
      }
    };
  }),
  on(fromUsers.fetchUsersFailure, (state, { payload }) => {
    return {
      ...state,
      users: {
        ...state.users,
        isLoading: false,
        isLoaded: false,
        errors: [...state.users.errors, payload]
      }
    };
  })
);

export function usersReducer(state = initialUsersState, actions: Action) {
  return reducer(state, actions);
}
