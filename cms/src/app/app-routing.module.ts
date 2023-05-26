import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';

const routes: Routes = [
  {
    path: 'photos',
    component: GalleryListComponent
  },  
  {
    path: 'news',
    component: NewsListComponent
  }
  // {
  //   path: '',
  //   redirectTo: '/photos',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '*',
  //   redirectTo: '/photos',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
