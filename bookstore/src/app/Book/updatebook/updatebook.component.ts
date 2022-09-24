import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { Category } from 'src/app/Model/Category';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css'],
})
export class UpdatebookComponent implements OnInit {
  categories!: Category[];
  category: Category = new Category();
  books!: Book[];
  book: Book = new Book();
  id!: number;

  constructor(
    private bookService: BookserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.book.category = new Category();
    this.id = this.route.snapshot.params['id'];
    //const id = +this.route.paramMap.get('id');
    this.getBooksById(this.id);
    console.log(this.id);
  }

  onUpdate() {
    this.updateBook(this.book);
  }

  getBooksById(bookId: number) {
    console.log('Inside getCategoryById');
    this.bookService.getBookById(bookId).subscribe((book) => {
      this.book = book;
      this.book.category.categoryId = book.category.categoryId;
      this.book.category.categoryName = book.category.categoryName;
      this.book.author = book.author;
      this.book.bookId = book.bookId;
      this.book.description = book.description;
      this.book.isbn = book.isbn;
      this.book.lastUpdatedOn = book.lastUpdatedOn;
      this.book.price = book.price;
      this.book.publishDate = book.publishDate;
    });
  }

  updateBook(book: Book) {
    this.bookService.updateBook(book).subscribe();
    window.location.href = '/viewbook';
  }

  getBooks() {
    console.log('Inside getCategory');
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
      console.log(this.categories);
    });
  }
}
