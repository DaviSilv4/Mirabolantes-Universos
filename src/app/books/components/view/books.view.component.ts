import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Books } from '../../model/data.model';
import { TestServiceService } from '../../../service/testService.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.view.component.html',
  styleUrls: ['./books.view.component.scss']
})
export class BooksViewComponent implements OnInit {

  books$!: Observable<Books[]>;
  displayedColums = ['id', 'name', 'category'];

  constructor(private testServiceService: TestServiceService){
    this.books$ = testServiceService.getTest();
  }

  ngOnInit() {}
}
