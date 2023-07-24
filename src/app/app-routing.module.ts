import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './Components/business/business.component';

import { CategoriesComponent } from './Components/recent-news/categories.component';
import { EditorsPickComponent } from './Components/editors-pick/editors-pick.component';
import { EntertainmentComponent } from './Components/entertainment/entertainment.component';
import { GeneralComponent } from './Components/general/general.component';
import { HeadComponent } from './Components/head/head.component';
import { HealthComponent } from './Components/health/health.component';
import { HomeComponent } from './Components/home/home.component';
import { PopularNewsComponent } from './Components/popular-news/popular-news.component';
import { ScienceComponent } from './Components/science/science.component';
import { SportsComponent } from './Components/sports/sports.component';
import { TechnologyComponent } from './Components/technology/technology.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { SearchComponent } from './Components/search/search.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SearchContentComponent } from './Components/search-content/search-content.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'categories/:id',
        component: CategoriesComponent,
      },
      {
        path: '',
        component: TrendingComponent,
      },
      {
        path: '',
        component: EditorsPickComponent,
      },
      {
        path: 'business',
        component: BusinessComponent,
      },
      {
        path: 'entertainment',
        component: EntertainmentComponent,
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'health',
        component: HealthComponent,
      },
      {
        path: 'science',
        component: ScienceComponent,
      },
      {
        path: 'sports',
        component: SportsComponent,
      },
      {
        path: 'technology',
        component: TechnologyComponent,
      },

      {
        path: 'aboutMe',
        component: AboutMeComponent,
      },
      {
        path: '',
        component: PopularNewsComponent,
      },
      {
        path: 'search',
        component: SearchContentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
