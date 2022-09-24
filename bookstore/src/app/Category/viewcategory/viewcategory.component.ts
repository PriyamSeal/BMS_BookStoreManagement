import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Model/Category';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css'],
})
export class ViewcategoryComponent implements OnInit {
  categories!: Category[];

  constructor(
    private categoryService: CategoryserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    console.log('Inside getCategory');
    this.categoryService.getCategory().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  deleteCategory(categoryId: number) {
    if (confirm('Confirm Delete?') == true) {
      console.log('Inside deleteCategory');
      this.categoryService.deleteCategory(categoryId).subscribe();
      window.location.href = '/viewcategory';
    }
  }
}
