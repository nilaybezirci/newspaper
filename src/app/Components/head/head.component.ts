import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  isActive: boolean = false;
  Result: any[] = [];
  searchResults: any[] = [];
  searchQuery: string = '';

  newsData: any[] = [];
  constructor(
    private service: NewspaperServiceService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.service.getNews().subscribe((response) => {
      this.Result = response.articles;
    });
  }

  searchNews(query: string) {
    this.searchQuery = query;
    this.service.searchNews(query).subscribe((data) => {
      this.searchResults = data.articles;
    });
  }
  openNavbar() {
    this.isActive = true;
  }
  closeNavbar() {
    this.isActive = false;
  }
}
