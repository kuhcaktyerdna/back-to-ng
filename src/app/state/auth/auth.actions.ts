import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user";

export const LOGIN = createAction(
  '[AUTH] log in user',
  props<{ email: string; password: string }>()
);

export const LOGGED_IN = createAction(
  '[AUTH] user logged in',
  props < { user: User }>()
);

export const LOGOUT = createAction(
  '[AUTH] logout'
)
