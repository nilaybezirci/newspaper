import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  technologyResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getTechnologyNews().subscribe((technologyResponse) => {
      console.log(technologyResponse, 'technologyresult#');
      if (technologyResponse && technologyResponse.articles) {
        this.technologyResult = technologyResponse.articles;
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
