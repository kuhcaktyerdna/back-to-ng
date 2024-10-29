import { Injectable } from "@angular/core";
import { Actions, createEffect, CreateEffectMetadata, ofType } from "@ngrx/effects";
import { LOGGED_IN, LOGIN } from "./auth.actions";
import { filter, map, Observable, switchMap } from "rxjs";
import { AuthService } from "../../service/auth.service";
import { User } from "../../model/user";

@Injectable()
export class AuthEffects {

  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
  ) {
  }

  login$: Observable<{ user: User }> = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap(({ email, password }) => {
        return this.authService.authenticate(email, password).pipe(
          filter(Boolean),
          map(user => LOGGED_IN({ user }))
        );
      })
    ));


}
