import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  imports: [
    NgClass
  ],
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input()
  openOnHover: boolean = false;

}
