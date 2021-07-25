import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Books } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  rootUrl="http://localhost:9090/api/book"

  constructor(public http: HttpClient) { }

  getAllBooks():Observable<Books[]> {
    return this.http.get<Books[]>(this.rootUrl + "/getBooks")
  }
}
