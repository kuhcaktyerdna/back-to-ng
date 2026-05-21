import { Component, Input, OnDestroy, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input()
  openOnHover: boolean = false;

  protected isOpen: WritableSignal<boolean> = signal(false);

  protected onMouseEnter(): void {
    if (this.openOnHover) {
      this.isOpen.set(true);
    }
  }

  protected onMouseLeave(event: MouseEvent): void {
    if (!this.openOnHover) {
      return;
    }
    // relatedTarget is null when mouse moves to browser-native UI (e.g. Chrome autofill popup)
    if (!event.relatedTarget) {
      return;
    }
    this.isOpen.set(false)
  }

  protected toggle(): void {
    if (this.openOnHover) {
      this.isOpen.update(v => !v);
    }
  }

}
