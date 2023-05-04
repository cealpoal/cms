import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerlinService {
  private URL = '../assets/data.json';
  private URL2 = '../assets/data2.json';
  private data = { someKey: 'value' };
  private blob = new Blob([JSON.stringify(this.data)], {type: 'text/plain'});
  private tmpFile = new File([this.blob], 'data2.json');

  constructor(private http: HttpClient) {
  }

  public ReadFile(){
    this.http.get(this.URL).subscribe(data => {
      console.log(data);
    });
  }

  public WriteFile(){
    try{
      this.http.put(this.URL2, this.data).subscribe(data => {
        console.log(data);
      });

    }catch{};
    // const form = new FormData();
    // form.append('file', this.tmpFile, this.URL2);
  }
}
