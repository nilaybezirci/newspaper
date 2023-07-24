import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  sportsResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getSportsNews().subscribe((sportsResponse) => {
      console.log(sportsResponse, 'sportsresult#');
      if (sportsResponse && sportsResponse.articles) {
        this.sportsResult = sportsResponse.articles;
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
