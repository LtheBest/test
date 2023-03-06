import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllBooks().subscribe((data: any) => {
      this.books = data;
    });
  }
}
