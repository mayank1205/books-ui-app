import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { BooksService } from "src/app/services/books.service";
import { Subject, BehaviorSubject } from 'rxjs';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public language: string,
    public year:number
   
   ) {}
 }

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
  constructor(private router: Router, private bookService: BooksService) {}

  books:Book[] | undefined;
  booksCount = 0;
  currentBookId: number = 0;
  editBook!: Subject<number> ;
  bookDetails!: Subject<number> ;
  ngOnInit() {
    this.getBooks();
    this.editBook = new BehaviorSubject(0);
    this.bookDetails = new BehaviorSubject(0);
  }

  callGetBooks() {
    console.log('call getbooks called?')
    this.getBooks();
  }

  getBooks() {
    console.log('getbooks called?')
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data.data;
      this.booksCount = data.count;
    });
  }

  setCurrentBook(id: number, func: string) {
    console.log(id);
    if(id) {
      console.log(id);
      this.currentBookId = id;
      console.log(this.editBook);
      if(func === 'edit'){
        this.editBook.next(this.currentBookId);
      }
      if(func === 'details'){
        this.bookDetails.next(this.currentBookId);
      }
    }
  }

  deleteCurrentBook() {
    console.log("gets called?");
    if(!this.currentBookId) {
      return;
    }
    this.bookService.deleteBook(this.currentBookId).subscribe((data: any) => {
      if (data.success) {
        this.books = data.data;
      } else {
      }
    });
  }

  navigate(route: string) {}
}
