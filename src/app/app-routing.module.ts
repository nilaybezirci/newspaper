import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './Components/business/business.component';

import { CategoriesComponent } from './Components/categories/categories.component';
import { EditorsPickComponent } from './Components/editors-pick/editors-pick.component';
import { HeadComponent } from './Components/head/head.component';
import { HomeComponent } from './Components/home/home.component';
import { PopularNewsComponent } from './Components/popular-news/popular-news.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { LayoutComponent } from './Layout/layout/layout.component';

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
        path: '',
        component: PopularNewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
