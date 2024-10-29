import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { from, map, Observable, of } from "rxjs";
import { compare, hash } from "bcrypt-ts";
import { Credentials } from "../model/credentials";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthService implements OnDestroy {

  private readonly _USERS: Map<Credentials, User>;

  constructor(private readonly http: HttpClient,
              private readonly toastr: ToastrService) {
    this._USERS = JSON.parse(localStorage.getItem('users')) || new Map();
  }

  register(email: string, password: string): Observable<User> {
    return from(hash(password, null)).pipe(
      map(passwordHash => {
        const credentials: Credentials = { email, passwordHash };
        if (this._USERS.has(credentials)) {
          this.toastr.warning('User with the following credentials already exists.');
          return null;
        }

        const user: User = { id: this._USERS.size, email };
        this._USERS.set(credentials, user);
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

    return from(compare(credentials.passwordHash, password)).pipe(
      map(passwordMatch => {
        if (!passwordMatch) {
          this.toastr.error('Password is incorrect.');
          return null;
        }

        return this._USERS.get(credentials);
      })
    );

  }

  ngOnDestroy(): void {
    localStorage.setItem('users', JSON.stringify(this._USERS))
  }

}
