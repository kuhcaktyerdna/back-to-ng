import { User } from "../../model/user";
import { createReducer, on } from "@ngrx/store";
import { LOGGED_IN, LOGOUT } from "./auth.actions";

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(LOGGED_IN, (state, { user }) => ({
    ...state,
    user
  })),
  on(LOGOUT, (state) => ({
    ...state,
    user: null
  }))
);
