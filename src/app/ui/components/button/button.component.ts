import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input()
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';

  @Input()
  outline?: boolean;

  get btnClass(): string {
    return `btn${this.outline && '-outline' || ''}-${this.type}`;
  }

}
