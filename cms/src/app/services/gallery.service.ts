import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { galleryResponse } from '../dtos/responses';

@Injectable({
providedIn:  'root'
})

export class GalleryService {
  private URI = 'https://localhost:3000/';

  constructor(private http: HttpClient) { }

  async getPhotos():Promise<galleryResponse[]> {
    const list:galleryResponse[] = [
      {
        path: "",
        id: "1",
        description: "prueba",
        inscription: new Date()
      }
    ];
    return list;
  }

  async getPhoto(id:string):Promise<galleryResponse>{
    const photo:galleryResponse = {
      path: "",
      id: "1",
      description: "prueba",
      inscription: new Date()
    };
    return photo;
  }

  async deletePhoto(id:string):Promise<boolean>{
    return true;
  }
}
