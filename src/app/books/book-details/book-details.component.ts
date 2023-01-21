import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  bookId!: number;
  @Input() bookDetails!: Subject<number>;
  book: any;
  @Output() getListChange = new EventEmitter(false);

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    console.log("this is the book details ");
    if(!this.bookId) {
      return
    }
    console.log("this is the book details ", this.bookId);
    this.booksService.getBook(this.bookId).subscribe((res: any) => {
      console.log(res.data);
      this.book = res.data;
      console.log(this.book)
    });
    console.log(this.bookDetails)
    console.log('coming here?');
   if(this.bookDetails) {
      this.bookDetails.subscribe(id => {
        if(!id) {
          return;
        }
        console.log(id)
        this.getListChange.emit(true);
        this.booksService.getBook(id).subscribe((res: any) => {
          console.log(res)
          this.book = res.data;
          console.log("this is the book details ", this.book);
        })
      })
  }
  }
  ngOnChanges() {
    console.log('on change');
    if(this.bookDetails) {
      this.bookDetails.subscribe(id => {
        if(!id) {
          return;
        }
        console.log(id)
        this.getListChange.emit(true);
        this.booksService.getBook(id).subscribe((res: any) => {
          console.log(res)
          this.book = res.data;
          console.log("this is the book details ", this.book);
        })
      })
  }
  }

}
