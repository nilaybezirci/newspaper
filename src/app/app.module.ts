import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './Components/head/head.component';
import { HomeComponent } from './Components/home/home.component';
import { DatePipe } from '@angular/common';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorsPickComponent } from './Components/editors-pick/editors-pick.component';
import { PopularNewsComponent } from './Components/popular-news/popular-news.component';
import { BusinessComponent } from './Components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    CategoriesComponent,
    FooterComponent,
    LayoutComponent,
    TrendingComponent,
    EditorsPickComponent,
    PopularNewsComponent,
    BusinessComponent,
  ],
  imports: [
    CommonModule,

    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
