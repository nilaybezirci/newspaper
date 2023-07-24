import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  scienceResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;

  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getScienceNews().subscribe((scienceResponse) => {
      console.log(scienceResponse, 'scienceresult#');
      if (scienceResponse && scienceResponse.articles) {
        this.scienceResult = scienceResponse.articles;
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
