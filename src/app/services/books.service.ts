import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  token = localStorage.getItem('token')
  constructor(private http: HttpClient) {
    
  }

  getHeaders(){
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+this.token
    });

    return {
      headers: headers_object
    };
  }

  getBooks() {
    
    return this.http.get(`${environment.API_URL}/books`, this.getHeaders());
  }

  addBook(book: any) {
    return this.http.post(`${environment.API_URL}/book`, book);
  }

  deleteBook(id: any) {
    return this.http.delete(`${environment.API_URL}/books/${id}`);
  }

  updateBook(id: any, book: any) {
    return this.http.put(`${environment.API_URL}/books/${id}`, book);
  }

  getBook(id: any) {
    return this.http.get(`${environment.API_URL}/books/${id}`);
  }
}
