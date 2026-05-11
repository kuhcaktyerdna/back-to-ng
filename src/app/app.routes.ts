import { Route } from '@angular/router';
import { HomeComponent } from "./components/home/home/home.component";
import { CategoriesComponent } from "./components/home/categories/categories.component";

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent }
];
