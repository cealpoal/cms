import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { newResponse } from 'src/app/dtos/responses';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news:newResponse[] = [];
  currentNew:newResponse = {
    id:'',
    pathImage:'',
    title:'',
    description:'',
    inscription:new Date(),
    url:''
  };
  formEdit: FormGroup;
  currentIndex = 0;
  showMask = false;
  previewNew = false;
  editing = false;
  showCount = false;
  controls = true;
  totalImageCount = 0;

 //EDIT FORM
 get descripcion() { return this.formEdit.get('description'); }
 get titulo(){ return this.formEdit.get('title'); }
  
 crearFormEdit(){
   return new FormGroup(
     {
       descripcion: new FormControl(this.currentNew.description, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
       title: new FormControl(this.currentNew.title,[Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
       url: new FormControl(this.currentNew.url,[Validators.minLength(1), Validators.maxLength(50)])
     }
   );
 }
 resetFormEdit(): void{ this.formEdit.reset(); }
 saveFormEdit(index:number, id:string): void{
   if(this.formEdit.valid){
     let form: any = this.formEdit.getRawValue();
     this.newService.editNew(id,form.title,form.descripcion,form.url).then(data => {
       this.news[index].title = form.title;
       this.news[index].description = form.descripcion;
       this.news[index].url = form.url;
       this.onPreviewNew(index);
       return data;
     });
     this.closeFormEdit();
   }
 }
 closeFormEdit(): void{
   this.editing = false;
   this.controls = true;
 }
 //END FORM

  constructor(private newService:NewsService){
    this.formEdit = this.crearFormEdit();
  }

  ngOnInit(): void {
    this.newService.getNews().then(data => this.news = data);
  }

  clickSelect(id:string){

  }

  onPreviewNew(index:number){
    this.showMask = true;
    this.previewNew = true;
    this.showCount = true;
    this.editing = false;
    this.currentIndex = index;
    this.currentNew = this.news[index];
    this.totalImageCount = this.news.length;
    this.controls = (this.totalImageCount > 1);
  }

  closeNew(){
    this.showMask = false;
    this.previewNew = false;
    this.showCount = false;
    this.controls = false;
    this.editing = false;
    this.currentIndex = 0;
  }

  edit(index:number){
    this.editing = true;
    this.controls = false;                                                                                                                                                                         
  }

  deleteNew(id:string){

  }
  
  moveLeft(index:number):void{
    if(index <= 0){
      this.currentIndex = this.news.length - 1;
    }else{
      this.currentIndex -= 1;
    }
    this.currentNew = this.news[this.currentIndex];
  }

  moveRight(index:number):void{
    if(index >= this.news.length - 1){
      this.currentIndex = 0;
    }else{
      this.currentIndex += 1;
    }
    this.currentNew = this.news[this.currentIndex];
  }

}

