import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, EMPTY, Observable, of } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { User } from "../model/user.model";
import { Credentials } from "../model/credentials.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = 'https://dummyjson.com/auth';
  private readonly toastr: ToastrService = inject(ToastrService);
  private readonly http = inject(HttpClient);

  register(email: string, password: string): Observable<null> {
    this.toastr.warning('Registration is not implemented yet.');
    return of(null);
  }

  authenticate({username, password}: Credentials): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/login`, {
      username,
      password,
    }).pipe(
      catchError((e) => {
        console.log(e);
        this.toastr.error(e.error.message);
        return EMPTY;
      })
    );
  }

}
