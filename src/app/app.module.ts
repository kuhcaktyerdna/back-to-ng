import { NgModule, OnDestroy } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiModule } from "./ui/ui.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderPresentationComponent } from "./core/header/header-presentation.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./state/auth/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth/auth.effects";
import { AuthService } from "./service/auth.service";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { HeaderSmartComponent } from "./core/header/header.smart.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({auth: authReducer}),
    ToastrModule.forRoot(),
    UiModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderPresentationComponent,
    HeaderSmartComponent
  ],
  providers: [
    AuthService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

