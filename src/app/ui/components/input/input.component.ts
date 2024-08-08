import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input()
  placeholder?: string;

  @Output()
  submit: EventEmitter<string> = new EventEmitter();

  onSubmit(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const searchStr: string = (<HTMLInputElement>event.target)?.value;
      this.submit.emit(searchStr);
    }
  }
}
