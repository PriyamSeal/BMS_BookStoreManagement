import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css'],
})
export class ViewbookComponent implements OnInit {
  books!: Book[];

  constructor(
    private BookService: BookserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    console.log('Inside GetBooks');
    this.BookService.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }

  deleteBook(bookId: number) {
    if (confirm('Confirm Delete?') == true) {
      console.log('Inside deleteCategory');
      this.BookService.deleteBook(bookId).subscribe();
      window.location.href = '/viewbook';
    }
  }
}
