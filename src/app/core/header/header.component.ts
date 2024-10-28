import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  faCartShopping,
  faHeadset,
  faHeart,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  protected readonly faHeadset: IconDefinition = faHeadset;
  protected readonly faSearch: IconDefinition = faSearch;
  protected readonly faUser: IconDefinition = faUser;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faCartShopping: IconDefinition = faCartShopping;

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
    console.log(`signIn ${this.userForm.value}`);
  }

  signUp(): void {
    console.log(`signUp ${this.userForm.value}`);
  }
}
