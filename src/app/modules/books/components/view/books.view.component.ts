import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Books } from '../../model/data.model';
import { BooksService } from '../../service/Books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.view.component.html',
  styleUrls: ['./books.view.component.scss']
})
export class BooksViewComponent implements OnInit {

  books$!: Observable<Books[]>;

  constructor(private booksService: BooksService){
    this.books$ = booksService.getTest();
  }

  ngOnInit() {}
}
