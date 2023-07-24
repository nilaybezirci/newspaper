import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './Components/head/head.component';
import { HomeComponent } from './Components/home/home.component';
import { DatePipe } from '@angular/common';
import { CategoriesComponent } from './Components/recent-news/categories.component';

import { LayoutComponent } from './Layout/layout/layout.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorsPickComponent } from './Components/editors-pick/editors-pick.component';
import { PopularNewsComponent } from './Components/popular-news/popular-news.component';
import { BusinessComponent } from './Components/business/business.component';
import { EntertainmentComponent } from './Components/entertainment/entertainment.component';
import { GeneralComponent } from './Components/general/general.component';
import { HealthComponent } from './Components/health/health.component';
import { ScienceComponent } from './Components/science/science.component';
import { SportsComponent } from './Components/sports/sports.component';
import { TechnologyComponent } from './Components/technology/technology.component';
import { EditorsPickCardComponent } from './Components/editors-pick-card/editors-pick-card.component';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SearchContentComponent } from './Components/search-content/search-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    CategoriesComponent,

    LayoutComponent,
    TrendingComponent,
    EditorsPickComponent,
    PopularNewsComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    EditorsPickCardComponent,
    SearchComponent,
    AboutMeComponent,
    SearchContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
