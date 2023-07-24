import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  entertainmentResult: any[] = [];
  constructor(private service: NewspaperServiceService) {}
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
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
  onPopularPageChange(event: number): void {
    this.currentPopularNewsPage = event;
  }
}
