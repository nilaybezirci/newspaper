import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newspaper-app';

  searchResults: any[] = [];
  searchQuery: string = '';
  constructor(private service: NewspaperServiceService) {}

  searchNews(query: string) {
    this.searchQuery = query;
    this.service.searchNews(query).subscribe((data) => {
      this.searchResults = data.articles;
    });
  }
}
