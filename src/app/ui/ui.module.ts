import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IconComponent } from "./components/icon/icon.component";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

const UI_COMPONENTS = [
  ButtonComponent,
  DropdownComponent,
  IconComponent,
  InputComponent
];

@NgModule({
  declarations: UI_COMPONENTS,
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: UI_COMPONENTS
})
export class UiModule {

}
