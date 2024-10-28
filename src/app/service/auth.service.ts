import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {

  constructor(private readonly http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<User> {
    return of({ id: 1, name: 'test', email: 'test@gmail.com' });
  }

}
