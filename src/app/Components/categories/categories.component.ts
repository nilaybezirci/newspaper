import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  entertainmentResult: any[] = [];
  businessResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private service: NewspaperServiceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getBusinessNews().subscribe((businessResponse) => {
      console.log(businessResponse, 'businessresult#');
      if (businessResponse && businessResponse.articles) {
        this.businessResult = businessResponse.articles;
      } else {
        console.error('Invalid response format: articles property not found');
      }
    });

    this.service.getEntertainmentNews().subscribe((entertainmentResponse) => {
      console.log(entertainmentResponse, 'entertainmentresult#');
      if (entertainmentResponse && entertainmentResponse.articles) {
        this.entertainmentResult = entertainmentResponse.articles;
      } else {
        console.error('Invalid response format: articles property not found');
      }
    });
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }
}
