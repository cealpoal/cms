import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newResponse } from '../dtos/responses';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private URI = 'https://localhost:3000/';

  constructor(private http:HttpClient) { }
  
  async newNew(title:string, description:string, url:string):Promise<boolean>{
    return true;
  }

  async getNews():Promise<newResponse[]>{
    const list:newResponse[] = [
      {
        id:"1",
        title:"titulo1",
        description:"demo1",
        pathImage:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        inscription: new Date(),
        url: "prueba"
      },
      {
        id:"2",
        title:"titulo2",
        description:"demo2",
        pathImage:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        inscription: new Date(),
        url: "prueba"
      }
    ];
    return list;
  }

  async getNew(id: string):Promise<newResponse>{
    const news:newResponse = {
      pathImage: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/6/small_image/1920x/e9c3970ab036de70892d86c6d221abfe/h/o/hon00264-1.jpg",
      id: "1",
      title: 'title',
      description: "africa 1",
      inscription: new Date(),
      url: '',
    };
    return news;
  }

  async editNew(id:string, title:string, description: string, url:string):Promise<boolean>{
    return true;
  }

  async deleteNew(id:string):Promise<boolean>{
    return true;
  }

  async deleteNews(ids:string[]):Promise<boolean>{
    return true;
  }
}
