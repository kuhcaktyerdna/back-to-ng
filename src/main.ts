import { AuthService } from "./app/service/auth.service";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./app/state/auth/auth.effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./app/state/auth/auth.reducer";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      EffectsModule.forRoot([AuthEffects]),
      FormsModule, FontAwesomeModule,
      ReactiveFormsModule,
      StoreModule.forRoot({ auth: authReducer }),
      ToastrModule.forRoot(),
    ),
    AuthService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes)
  ]
}).catch(console.error);

