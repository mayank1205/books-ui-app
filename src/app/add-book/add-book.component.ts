import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  form: any;
  @Output() getListChange = new EventEmitter(false);

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
      language: new FormControl(''),
      year: new FormControl('')
   });
  }

  submit() {
    console.log('came here?');
    this.bookService.addBook(this.form.value).subscribe((data: any) => {
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
