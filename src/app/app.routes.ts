import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {BookComponent} from "./book/book.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {HomeComponent} from "./home/home.component";
import { AddBookComponent } from './admin-mangment/add-book/add-book.component';
import { UpdateBookComponent } from './admin-mangment/update-book/update-book.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'book', component: BookComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: "add-book", component: AddBookComponent},
  { path: "update-book", component: UpdateBookComponent}
];
