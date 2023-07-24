import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  generalResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;

  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getGeneralNews().subscribe((generalResponse) => {
      console.log(generalResponse, 'generalresult#');
      if (generalResponse && generalResponse.articles) {
        this.generalResult = generalResponse.articles;
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
