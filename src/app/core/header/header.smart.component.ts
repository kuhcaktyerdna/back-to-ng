import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../model/user";
import { selectUser } from "../../state/auth/auth.selectors";
import { AppState } from "../../state/app.state";
import { LOGIN, LOGOUT } from "../../state/auth/auth.actions";

@Component({
  selector: 'app-header-smart',
  template: `
    <app-header-presentation [user]="user$ | async"
                             (signedIn)="onSignIn($event)"
                             (signedOut)="onSignOut()"
    ></app-header-presentation>
  `,
  styleUrl: './header-presentation.component.scss',
})
export class HeaderSmartComponent {

  public user$: Observable<User>;

  constructor(private readonly store: Store<AppState>) {
    this.user$ = this.store.select(selectUser);
  }

  onSignIn({ email, password }: { email: string, password: string }): void {
    this.store.dispatch(LOGIN({ email, password }));
  }

  onSignOut(): void {
    this.store.dispatch(LOGOUT());
  }
}
