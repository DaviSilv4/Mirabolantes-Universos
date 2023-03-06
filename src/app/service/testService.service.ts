import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceService } from './BaseService.service';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService extends BaseServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  public getTest(): Observable<string> {
    return this.get('test');
  }
}
