import { Component, inject, Signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUser } from "../../state/auth/auth.selectors";
import { AppState } from "../../state/app.state";
import { LOGIN, LOGOUT, REGISTER } from "../../state/auth/auth.actions";
import { HeaderPresentationComponent } from "./header-presentation.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { User } from "../../model/user.model";
import { Credentials } from "../../model/credentials.model";

@Component({
  selector: 'app-header-smart',
  template: `
    <app-header-presentation [user]="user()"
                             (signedIn)="onSignIn($event)"
                             (signedOut)="onSignOut()"
                             (signedUp)="onSignUp($event)"
    ></app-header-presentation>
  `,
  imports: [
    HeaderPresentationComponent,
  ],
  styleUrl: './header-presentation.component.scss'
})
export class HeaderSmartComponent {

  private readonly store: Store<AppState> = inject(Store);

  protected user: Signal<User> = toSignal(this.store.select(selectUser));

  protected onSignIn(credentials: Credentials): void {
    this.store.dispatch(LOGIN(credentials));
  }

  protected onSignOut(): void {
    this.store.dispatch(LOGOUT());
  }

  protected onSignUp(credentials: Credentials): void {
    this.store.dispatch(REGISTER(credentials))
  }

}
