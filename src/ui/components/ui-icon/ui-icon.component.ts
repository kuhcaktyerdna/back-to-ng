import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrl: './ui-icon.component.scss'
})
export class UiIconComponent {

  @Input()
  @HostBinding('class')
  size: string;

  @Input()
  iconPath: string;

}
