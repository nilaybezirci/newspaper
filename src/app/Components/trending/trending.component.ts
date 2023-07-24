import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  trendingResult: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;

  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.service.getNews().subscribe((response) => {
      console.log(response, 'trendingresult#');
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.trendingResult = response.articles.slice(3, 15);
          console.log(this.trendingResult);
        } else {
          this.trendingResult = [response.articles];
        }
      } else {
        console.error('invalid response format:results property not found');
      }
    });
  }
}
