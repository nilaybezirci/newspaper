import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  
  recentResult: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private service: NewspaperServiceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getRecentNews().subscribe((recentResponse) => {
      console.log(recentResponse, 'recentresult#');
      if (recentResponse && recentResponse.articles) {
        this.recentResult = recentResponse.articles;
      } else {
        console.error('Invalid response format: articles property not found');
      }
    });

   
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }
}
