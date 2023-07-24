import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  categoryName: string = '';
  Result: any[] = [];

  constructor(private newspaperService: NewspaperServiceService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newspaperService.getNews().subscribe((response) => {
      this.Result = response.articles;
    });
  }
}
