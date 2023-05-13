import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery-form/gallery-form.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';

const routes: Routes = [
  {
    path: 'photos',
    component: GalleryListComponent
  },
  {
    path: 'photos/new',
    component: GalleryFormComponent
  },
  {
    path: 'photos/:id',
    component: GalleryPreviewComponent
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: '/photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
