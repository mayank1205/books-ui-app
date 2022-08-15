import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  form:any;
  @Output() getListChange = new EventEmitter(false);
  @Input()
  bookId!: number;
  @Input()
  editBook!: Subject<number>;

  constructor(private bookService: BooksService) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      language: new FormControl(''),
      year: new FormControl('')
   });

    this.editBook.subscribe(id => {
      if(!id) {
        return;
      }
      this.bookService.getBook(id).subscribe((res: any) => {
        let book = res.data;
        console.log(book);
        this.form = new FormGroup({
          title: new FormControl(book.name),
          author: new FormControl(book.author),
          language: new FormControl(book.language),
          year: new FormControl(book.year)
       });
      })
    })
  }

  submit() {
    this.bookService.updateBook(this.bookId, this.form.value).subscribe((data: any) => {
      if (data.success) {
        console.log('came here?');
        this.getListChange.emit(true);
      } else {
        //
        console.log('came here else case?');
      }
    });
  }

}
