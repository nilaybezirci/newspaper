import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  businessResult: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;
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
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }
  onPopularPageChange(event: number): void {
    this.currentPopularNewsPage = event;
  }
}
