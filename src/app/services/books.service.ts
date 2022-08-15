import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${environment.API_URL}/books`);
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
