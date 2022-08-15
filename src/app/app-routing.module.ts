import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
},{
  path: 'add',
  component: BookListComponent
},{
  path: 'edit',
  component: BookListComponent,
},{
  path: 'details',
  component: BookListComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
