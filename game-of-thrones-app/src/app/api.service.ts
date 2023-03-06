import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getBookDetails(bookId: string) {
    throw new Error('Method not implemented.');
  }
  private apiBaseUrl = 'https://anapioficeandfire.com/api';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get(`${this.apiBaseUrl}/books`);
  }

  getBookById(id: number) {
    return this.http.get(`${this.apiBaseUrl}/books/${id}`);
  }

  getCharactersByBookId(id: number) {
    return this.http.get(`${this.apiBaseUrl}/books/${id}/characters`);
  }

  getCharacterById(id: number) {
    return this.http.get(`${this.apiBaseUrl}/characters/${id}`);
  }
}
