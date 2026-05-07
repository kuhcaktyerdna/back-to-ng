import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  imports: [
    ButtonComponent,
    FormsModule
  ],
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
