import { inject, Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { from, map, Observable, of } from "rxjs";
import { compare, hash } from "bcrypt-ts";
import { CredentialsModel } from "../model/credentials.model";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private readonly _USERS: Map<CredentialsModel, User> = this.loadUsersFromStorage();
  private readonly toastr: ToastrService = inject(ToastrService);

  register(email: string, password: string): Observable<User> {
    return from(hash(password, 0)).pipe(
      map(passwordHash => {
        const credentials: CredentialsModel = { email, passwordHash };
        if (this._USERS.has(credentials)) {
          this.toastr.warning('User with the following credentials already exists.');
          return null;
        }

        const user: User = { id: this._USERS.size, email };
        this._USERS.set(credentials, user);
        localStorage.setItem('users', JSON.stringify(Array.from(this._USERS.entries())));
        this.toastr.success('User has been registered.');
        return user;
      })
    );

  }

  authenticate(userEmail: string, password: string): Observable<User> {
    const credentials = Array.from(this._USERS.keys()).find(({ email }) => email === userEmail);

    if (!credentials) {
      this.toastr.error('No user with the following username.');
      return of(null);
    }

    return from(compare(password, credentials.passwordHash)).pipe(
      map(passwordMatch => {
        if (!passwordMatch) {
          this.toastr.error('Password is incorrect.');
          return null;
        }

        return this._USERS.get(credentials);
      })
    );

  }

  private loadUsersFromStorage(): Map<CredentialsModel, User> {
    const stored: string = localStorage.getItem('users');
    if (!stored) {
      return new Map();
    }

    return new Map(JSON.parse(localStorage.getItem('users')));
  }

  ngOnDestroy(): void {
    console.log('ondestroy')
    localStorage.setItem('users', JSON.stringify(this._USERS))
  }

}
