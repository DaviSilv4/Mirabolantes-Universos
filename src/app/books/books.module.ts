import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BooksContainerComponent } from './components/container/books.container.component';
import { BooksViewComponent } from './components/view/books.view.component';

const routes: Routes = [
  {
    path: 'a',
    component: BooksContainerComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BooksContainerComponent,
    BooksViewComponent
  ],
})
export class BooksModule { }
