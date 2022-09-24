import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Category } from 'src/app/Model/Category';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css'],
})
export class UpdatecategoryComponent implements OnInit {
  categories!: Category[];
  category: Category = new Category();
  id!: number;

  constructor(
    private categoryService: CategoryserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //const id = +this.route.paramMap.get('id');
    this.getCategoriesById(this.id);
    console.log(this.id);
  }

  onUpdate() {
    this.updateCategory(this.category);
  }

  getCategoriesById(categoryId: number) {
    console.log('Inside getCategoryById');
    this.categoryService.getCategoryById(categoryId).subscribe((category) => {
      this.category = category;
      this.category.categoryId = category.categoryId;
      this.category.categoryName = category.categoryName;
    });
  }

  updateCategory(category: Category) {
    this.categoryService.updateCategory(category).subscribe();
    window.location.href = '/viewcategory';
  }

  getCategories() {
    console.log('Inside getCategory');
    this.categoryService.getCategory().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}
