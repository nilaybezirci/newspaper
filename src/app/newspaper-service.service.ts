import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from './Components/models/new-response-model';

@Injectable({
  providedIn: 'root',
})
export class NewspaperServiceService {
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.language = 'en-Us';
    this.region = 'us';
  }

  private apiKey = '676f017549224f488970f1835f9db971';

  getNews(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getBusinessNews(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getEntertainmentNews(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
