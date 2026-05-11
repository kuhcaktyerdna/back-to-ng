import { Component, inject, Signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "../../model/user";
import { selectUser } from "../../state/auth/auth.selectors";
import { AppState } from "../../state/app.state";
import { LOGIN, LOGOUT, REGISTER } from "../../state/auth/auth.actions";
import { HeaderPresentationComponent } from "./header-presentation.component";
import { toSignal } from "@angular/core/rxjs-interop";

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

  public user: Signal<User> = toSignal(this.store.select(selectUser));

  onSignIn({ email, password }: { email: string, password: string }): void {
    this.store.dispatch(LOGIN({ email, password }));
  }

  onSignOut(): void {
    this.store.dispatch(LOGOUT());
  }

  onSignUp({ email, password }: { email: string, password: string }): void {
    this.store.dispatch(REGISTER({email, password}))
  }

}
