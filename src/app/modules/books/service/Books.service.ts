import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { BaseServiceService } from 'src/app/rest/BaseService.service';
import { Books } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BaseServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getTest(): Observable<Books[]> {
    return this.get('books');
  }

  save(books: Partial<Books>): Observable<Books>{
    console.log(books);
    return this.post('books', books).pipe(first());
  }
}
