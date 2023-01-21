import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
  canActivate: [AuthGuard]
},{
  path: 'books',
  component: BookListComponent,
  canActivate: [AuthGuard]
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'add',
  component: AddBookComponent
},{
  path: 'edit',
  component: EditBookComponent,
},{
  path: 'details',
  component: BookDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
