import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { faCartShopping, faHeadset, faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent, IconDefinition } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";
import { User } from "@model/user.model";
import { Credentials } from "@model/credentials.model";
import {
  ButtonComponent,
  DropdownComponent,
  IconComponent,
  InputComponent
} from "@ui/components";

@Component({
  selector: 'app-header-presentation',
  templateUrl: './header-presentation.component.html',
  styleUrl: './header-presentation.component.scss',
  imports: [
    DropdownComponent,
    FaIconComponent,
    ButtonComponent,
    ReactiveFormsModule,
    InputComponent,
    IconComponent,
    RouterLink
  ]
})
export class HeaderPresentationComponent {

  protected readonly faHeadset: IconDefinition = faHeadset;
  protected readonly faSearch: IconDefinition = faSearch;
  protected readonly faUser: IconDefinition = faUser;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faCartShopping: IconDefinition = faCartShopping;

  readonly user: InputSignal<User> = input.required<User>();

  protected signedIn: OutputEmitterRef<Credentials> = output();
  protected signedOut: OutputEmitterRef<void> = output();
  protected signedUp: OutputEmitterRef<Credentials> = output();

  protected readonly userForm: FormGroup = new FormGroup({
      username: new FormControl<string>("", [
        Validators.required
      ]),
      password: new FormControl<string>("", [])
    },
  );

  protected search(searchStr: string): void {
    console.log(searchStr);
  }

  protected signIn(): void {
    const { username, password } = this.userForm.value;
    this.signedIn.emit({ username, password } satisfies Credentials);
  }

  protected signOut(): void {
    this.signedOut.emit();
  }

  protected signUp(): void {
    const { username, password } = this.userForm.value;
    this.signedUp.emit({ username, password } satisfies Credentials)
  }
}
