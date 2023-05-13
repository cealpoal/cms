import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/gallery/navigation/navigation.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery/gallery-form/gallery-form.component';
import { GalleryPreviewComponent } from './components/gallery/gallery-preview/gallery-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/main/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GalleryListComponent,
    GalleryFormComponent,
    GalleryPreviewComponent,
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
