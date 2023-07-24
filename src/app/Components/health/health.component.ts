import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  healthResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  currentPopularNewsPage: number = 1;
  itemsPopularNewsPerPage = 3;
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getHealthNews().subscribe((healthResponse) => {
      console.log(healthResponse, 'healthresult#');
      if (healthResponse && healthResponse.articles) {
        this.healthResult = healthResponse.articles;
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
