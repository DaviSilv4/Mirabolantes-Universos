import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BooksContainerComponent } from './components/container/books.container.component';
import { BooksViewComponent } from './components/view/books.view.component';
import { BooksFormComponent } from './form/booksForm/booksForm.component';

const routes: Routes = [
  {
    path: 'a',
    component: BooksContainerComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    BooksContainerComponent,
    BooksViewComponent,
    BooksFormComponent
  ],
})
export class BooksModule { }
