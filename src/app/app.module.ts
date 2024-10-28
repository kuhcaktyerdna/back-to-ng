import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiModule } from "./ui/ui.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./state/auth/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth/auth.effects";
import { AuthService } from "./service/auth.service";
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({auth: authReducer}),
    UiModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    AuthService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

