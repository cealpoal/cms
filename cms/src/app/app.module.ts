import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/main/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    NaviComponent
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
