import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  businessResult: any[] = [];
  popularpostsResult: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
    this.popularBusinessData();
  }

  popularBusinessData() {
    this.service.getBusinessNews().subscribe((response) => {
      console.log(response, 'popularpostsresult#');
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.popularpostsResult = response.articles.slice(0, 30);
          console.log(this.popularpostsResult);
        } else {
          this.popularpostsResult = [response.articles];
        }
      } else {
        console.error('invalid response format:results property not found');
      }
    });
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
}
