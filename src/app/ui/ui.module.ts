import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IconComponent } from "./components/icon/icon.component";
import { InputComponent } from "./components/input/input.component";

const UI_COMPONENTS = [
  IconComponent,
  InputComponent
];

@NgModule({
  declarations: UI_COMPONENTS,
  imports: [BrowserModule],
  exports: UI_COMPONENTS
})
export class UiModule {

}
