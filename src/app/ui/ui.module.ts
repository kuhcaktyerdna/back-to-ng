import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IconComponent } from "./components/icon/icon.component";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";

const UI_COMPONENTS = [
  ButtonComponent,
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
