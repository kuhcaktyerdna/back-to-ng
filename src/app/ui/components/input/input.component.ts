import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input()
  placeholder?: string;

  @Input()
  withButton?: boolean;

  value: string = '';

  @Output()
  readonly valueChange: EventEmitter<string> = new EventEmitter();

  @Output()
  readonly submit: EventEmitter<string> = new EventEmitter();

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    if (this.value) {
      this.submit.emit(this.value);
    }
  }

}
