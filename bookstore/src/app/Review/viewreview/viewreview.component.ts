import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/Model/Review';
import { ReviewserviceService } from 'src/app/services/reviewservice.service';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css'],
})
export class ViewreviewComponent implements OnInit {
  reviews!: Review[];

  constructor(
    private ReviewService: ReviewserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews() {
    console.log('Inside GetBooks');
    this.ReviewService.getAllReviews().subscribe((data) => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }
}
