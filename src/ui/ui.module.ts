import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UiIconComponent } from "./components/ui-icon/ui-icon.component";

const UI_COMPONENTS = [UiIconComponent];

@NgModule({
  declarations: UI_COMPONENTS,
  imports: [BrowserModule],
  exports: UI_COMPONENTS
})
export class UiModule {

}
