import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

}
