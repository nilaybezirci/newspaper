import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  private apiKey = '30855cdaa415458baa8abb70bd89af30';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  getNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getBusinessNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=business&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getEntertainmentNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=entertainment&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getGeneralNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=general&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getHealthNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=health&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getScienceNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=science&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getSportsNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=sports&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
  getTechnologyNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&category=technology&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecentNews(): Observable<any> {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-07-19&to=2023-07-19&sortBy=popularity&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getPopularNews(): Observable<any> {
    const url = `${this.apiUrl}?country=us&sortBy=popularity&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  searchNews(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
