import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../books/model/data.model';
import { BaseServiceService } from './BaseService.service';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService extends BaseServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  public getTest(): Observable<Books[]> {
    return this.get('');
  }
}
