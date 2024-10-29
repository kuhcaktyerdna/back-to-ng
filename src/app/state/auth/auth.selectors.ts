import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "./auth.reducer";

export const selectAuth = (state: AppState) => state.auth;
export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user);
