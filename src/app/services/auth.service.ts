import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthStatus() {
    return localStorage.getItem('token') ? true: false;
  }

  login(user: any){
    return this.http.post(`${environment.API_URL}/users/login`, user, {headers: {'Allow-access-expose-headers': 'Authorization'}, observe: 'response'});
  }
}
