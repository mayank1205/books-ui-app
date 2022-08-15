import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
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
