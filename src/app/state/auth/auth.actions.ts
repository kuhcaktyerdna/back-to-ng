import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user.model";
import { Credentials } from "../../model/credentials.model";

export const LOGIN = createAction(
  '[AUTH] log in user',
  props<Credentials>()
);

export const LOGGED_IN = createAction(
  '[AUTH] user logged in',
  props<User>()
);

export const LOGOUT = createAction(
  '[AUTH] logout'
)

export const REGISTER = createAction(
  '[AUTH] register',
  props<Credentials>()
)
