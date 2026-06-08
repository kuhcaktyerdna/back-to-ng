import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideEffects } from "@ngrx/effects";
import { AuthEffects } from "@state/auth/auth.effects";
import { provideRouter, withComponentInputBinding, withViewTransitions } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideStore } from "@ngrx/store";
import { authReducer } from "@state/auth/auth.reducer";
import { provideToastr } from "ngx-toastr";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    // Setup NGRX:
    provideEffects([AuthEffects]),
    provideStore({ auth: authReducer }),

    provideHttpClient(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideToastr()
  ]
}).catch(console.error);

