import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Model/Category';
import { CategoryserviceService } from 'src/app/services/categoryservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  
  category: Category=new Category();
  constructor(private categoryService: CategoryserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  saveCategory(){
    
    this.categoryService.createCategory(this.category).subscribe( (data: any) =>{
      console.log(data);
      
    },
      (    error: any) => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/viewbook']);
  }

  onSubmit(){
    console.log(this.category);
    this.saveCategory();
    window.location.href="/viewcategory";
  }

}
