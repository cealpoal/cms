import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NaviComponent } from './components/main/navi/navi.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    NaviComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
