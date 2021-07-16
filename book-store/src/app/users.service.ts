import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  rootUrl="http://localhost:9090/api/customer"
  constructor(public http: HttpClient) { }

  getAllUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.rootUrl)
  }
}
