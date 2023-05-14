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
        path: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id: "1",
        description: "africa 1",
        inscription: new Date()
      },
      {
        path: "https://images.unsplash.com/photo-1642670310920-6f4e3a3adee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        id: "2",
        description: "africa 2",
        inscription: new Date()
      },
      {
        path: "https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        id: "3",
        description: "africa 3",
        inscription: new Date()
      },
      {
        path: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/6/small_image/1920x/e9c3970ab036de70892d86c6d221abfe/h/o/hon00264-1.jpg",
        id: "1",
        description: "africa 1",
        inscription: new Date()
      },
      {
        path: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/6/small_image/1920x/e9c3970ab036de70892d86c6d221abfe/h/o/hon00264-9.jpg",
        id: "2",
        description: "africa 2",
        inscription: new Date()
      },
      {
        path: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/6/small_image/1920x/e9c3970ab036de70892d86c6d221abfe/h/o/hon00264-16.jpg",
        id: "3",
        description: "africa 3",
        inscription: new Date()
      }
    ];
    return list;
  }

  async getPhoto(id:string):Promise<galleryResponse>{
    const photo:galleryResponse = {
      path: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/6/small_image/1920x/e9c3970ab036de70892d86c6d221abfe/h/o/hon00264-1.jpg",
      id: "1",
      description: "africa 1",
      inscription: new Date()
    };
    return photo;
  }

  async deletePhoto(id:string):Promise<boolean>{
    return true;
  }
}
