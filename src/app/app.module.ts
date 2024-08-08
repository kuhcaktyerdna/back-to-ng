import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UiModule } from "./ui/ui.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

