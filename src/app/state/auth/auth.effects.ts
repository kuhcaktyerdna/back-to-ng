import { Injectable } from "@angular/core";
import { Actions, createEffect, CreateEffectMetadata, ofType } from "@ngrx/effects";
import { LOGGED_IN, LOGIN, REGISTER } from "./auth.actions";
import { filter, map, Observable, switchMap } from "rxjs";
import { AuthService } from "../../service/auth.service";
import { User } from "../../model/user";

@Injectable()
export class AuthEffects {

  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
  ) {
  }

  login$: Observable<User> = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap(({ email, password }: { email: string, password: string }) => {
        return this.authService.authenticate(email, password).pipe(
          filter(Boolean),
          map(LOGGED_IN)
        );
      })
    ));

  register$: Observable<User> = createEffect(() =>
    this.actions$.pipe(
      ofType(REGISTER),
      switchMap(({ email, password }: { email: string, password: string }) => {
        return this.authService.register(email, password).pipe(
          filter(Boolean),
          map(LOGGED_IN)
        );
      })
    )
  )

}
