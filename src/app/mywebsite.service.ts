import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { initial } from './initial';
// import { catchError, retry, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MywebsiteService {

  configUrl = "https://cs251-outlab-6.herokuapp.com/initial_values/";
  postUrl = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getConfig(): Observable<initial>{
    return this.http.get<initial>(this.configUrl);
    // .pipe(
    // catchError(this.handleError<initial>('getConfig', []))
    // );
  }
  addPost(details:initial): Observable<initial>{
    return this.http.post<initial>(this.postUrl, details);
  }
}
