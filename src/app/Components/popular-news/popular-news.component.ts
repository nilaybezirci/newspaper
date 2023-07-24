import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.css'],
})
export class PopularNewsComponent implements OnInit {
  popularpostsResult: any = [];
  popularentpostsResult: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.popularBusinessData();
    this.popularEntertainmentData();
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

  popularEntertainmentData() {
    this.service.getEntertainmentNews().subscribe((response) => {
      console.log(response, 'entertainmentresult#');
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.popularentpostsResult = response.articles.slice(0, 30);
          console.log(this.popularentpostsResult);
        } else {
          this.popularentpostsResult = [response.articles];
        }
      } else {
        console.error('invalid response format:results property not found');
      }
    });
  }
}
