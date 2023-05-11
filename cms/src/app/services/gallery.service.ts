import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { galleryResponse } from '../dtos/responses';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private URI = 'localhost:3000/gallery';
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<galleryResponse[]>(this.URI);
  }
}
