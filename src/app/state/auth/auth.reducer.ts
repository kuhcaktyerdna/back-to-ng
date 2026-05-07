import { User } from "../../model/user";
import { createReducer, on } from "@ngrx/store";
import { LOGGED_IN, LOGOUT } from "./auth.actions";

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(LOGGED_IN, (state: AuthState, user: User): AuthState => ({
    ...state,
    user
  })),
  on(LOGOUT, (state: AuthState): AuthState => ({
    ...state,
    user: null
  }))
);
