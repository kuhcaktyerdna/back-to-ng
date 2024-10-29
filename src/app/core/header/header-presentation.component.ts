import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  faCartShopping,
  faHeadset,
  faHeart,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/angular-fontawesome";
import { User } from "../../model/user";

@Component({
  selector: 'app-header-presentation',
  templateUrl: './header-presentation.component.html',
  styleUrl: './header-presentation.component.scss',
})
export class HeaderPresentationComponent {

  protected readonly faHeadset: IconDefinition = faHeadset;
  protected readonly faSearch: IconDefinition = faSearch;
  protected readonly faUser: IconDefinition = faUser;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faCartShopping: IconDefinition = faCartShopping;

  @Input()
  user: User;

  @Output()
  signedIn: EventEmitter<{ email: string, password: string }> = new EventEmitter();

  @Output()
  signedOut: EventEmitter<{ email: string }> = new EventEmitter();

  protected readonly userForm: FormGroup = new FormGroup({
      userEmail: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      userPassword: new FormControl("", [])
    },
  );

  search(searchStr: string): void {
    console.log(searchStr);
  }

  signIn(): void {
    this.signedIn.emit({ email: this.userForm.value.userEmail, password: this.userForm.value.userPassword });
  }

  signOut(): void {
    this.signedOut.emit();
  }

  signUp(): void {
    console.log(`signUp ${this.userForm.value}`);
  }
}
