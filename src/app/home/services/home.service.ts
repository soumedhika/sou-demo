import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  getUserData() {
    return this.http.get(this.url+'/users');
  }
}
