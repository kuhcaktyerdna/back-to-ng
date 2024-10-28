import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOGGED_IN, LOGIN } from "./auth.actions";
import { map, switchMap } from "rxjs";
import { AuthService } from "../../service/auth.service";

@Injectable()
export class AuthEffects {

  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
  ) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap(({ email, password }) => {
        return this.authService.authenticate(email, password).pipe(
          map(user => LOGGED_IN({ user }))
        );
      })
    ));


}
