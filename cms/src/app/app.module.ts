import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery-form/gallery-form.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GalleryListComponent,
    GalleryFormComponent,
    GalleryPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
