import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOGGED_IN, LOGIN, REGISTER } from "./auth.actions";
import { filter, map, Observable, switchMap } from "rxjs";
import { AuthService } from "@service/auth.service";
import { User } from "@model/user.model";
import { Credentials } from "@model/credentials.model";

@Injectable()
export class AuthEffects {

  private readonly actions$: Actions = inject(Actions);
  private readonly authService: AuthService = inject(AuthService);

  login$: Observable<User> = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap((credentials: Credentials) => {
        return this.authService.authenticate(credentials).pipe(
          filter(Boolean),
          map(LOGGED_IN)
        );
      })
    ));

  register$: Observable<User> = createEffect(() =>
    this.actions$.pipe(
      ofType(REGISTER),
      switchMap(({ username, password }: Credentials) => {
        return this.authService.register(username, password).pipe(
          filter(Boolean),
          map(LOGGED_IN)
        );
      })
    )
  )

}
