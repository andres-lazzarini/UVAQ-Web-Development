import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(userID?: string): Observable<any> {
    let params = new HttpParams().set('page', '1');

    if (userID) {
      params = params.append('id', userID);
    }

    return this.http.get('https://reqres.in/api/users', { params });
  }
}
