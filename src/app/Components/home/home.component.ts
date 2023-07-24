import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';
import 'bootstrap/dist/js/bootstrap.bundle';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannerResult: any = [];

  Result: any = [];

  constructor(
    private service: NewspaperServiceService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.getNews().subscribe((response) => {
      console.log(response, 'bannerresult#');
      // Veriyi dizi yapısına çevirme
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.bannerResult = response.articles.slice(0, 3); // İlk 3 nesneyi sınırlama
          console.log(this.bannerResult);
        } else {
          this.bannerResult = [response.articles]; // Veriyi tek bir elemanlık bir diziye çevirme
        }
      } else {
        console.error('Invalid response format: results property not found.');
      }
    });
  }
}
