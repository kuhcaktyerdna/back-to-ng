import { Component, HostBinding } from '@angular/core';
import { HeaderSmartComponent } from "./core/header/header.smart.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./core/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderSmartComponent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @HostBinding('class')
  private readonly _hostClass = 'root';

}
