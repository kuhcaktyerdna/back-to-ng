import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  @Input()
  @HostBinding('class')
  size: string;

  @Input()
  iconPath: string;

}
