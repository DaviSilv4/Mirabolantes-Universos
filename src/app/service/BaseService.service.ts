import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private httpClient: HttpClient) { }

  private uri = "api/books";

  private httpRequest(method: string, url: string, options: any): Observable<any> {
    return this.httpClient.request(method,`${this.uri}${url}`, { ...options }).pipe(take(1));
  }

  post(url: string, body: any): Observable<any> {
    return this.httpRequest('post', url, { body: body });
  }

  get(url: string, params?: any): Observable<any> {
    return this.httpRequest('get', url, { params: params });
  }

  put(url: string, body: any): Observable<any> {
    return this.httpRequest('put', url, { body: body });
  }

  delete(url: string): Observable<any> {
    return this.httpRequest('delete', url, {});
  }

}
