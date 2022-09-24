import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { Category } from 'src/app/Model/Category';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  book: Book = new Book();
  //category: Category=new Category();
  message: boolean = false;

  constructor(
    private bookService: BookserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book.category = new Category();
  }

  saveBook() {
    this.bookService.createBook(this.book).subscribe(
      (data: any) => {
        console.log(data);
        this.goToBookList();
      },
      (error: any) => console.log(error)
    );
  }

  goToBookList() {
    this.router.navigate(['/viewbook']);
  }

  onSubmit() {
    console.log(this.book);

    this.saveBook();
    this.message = true;
  }
}
