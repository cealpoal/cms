import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { galleryResponse } from 'src/app/dtos/responses';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  @Input() galleryData: galleryResponse[] = [];
  @Input() showCount = false;
  formEdit: FormGroup;
  formNew: FormGroup;
  photos: galleryResponse[] = [];
  checkedList: string[] = [];
  
  previewPhoto = false;
  showMask = false;
  editing = false;
  new = false;
  currentPhoto:galleryResponse = {
    path:'',
    id:'',
    description:'',
    inscription:new Date()
  };
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  //NEW FORM
  get descripcionNew() { return this.formNew.get('description'); }
  get pathNew() { return this.formNew.get('path'); }
  
  crearFormNew(){
    return new FormGroup(
      {
        descripcionNew: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        pathNew: new FormControl('')
      }
    );
  }
  resetFormNew(): void{ this.formNew.reset(); }
  saveFormNew():void {

  }
  closeFormNew():void{

  }
  //END FORM

  //EDIT FORM
  get descripcion() { return this.formEdit.get('description'); }
  
  crearFormEdit(){
    return new FormGroup(
      {
        descripcion: new FormControl(this.currentPhoto.description, [Validators.required, Validators.minLength(1), Validators.maxLength(50)])
      }
    );
  }
  resetFormEdit(): void{ this.formEdit.reset(); }
  saveFormEdit(index:number, id:string): void{
    if(this.formEdit.valid){
      let form: any = this.formEdit.getRawValue();
      this.galleryService.editPhoto(id,form.descripcion).then(data => {
        this.photos[index].description = form.descripcion;
        this.onPreviewPhoto(index);
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


  constructor(private galleryService:GalleryService){
    this.formEdit = this.crearFormEdit();
    this.formNew = this.crearFormNew();
  }

  ngOnInit(): void {
    this.galleryService.getPhotos().then(data => this.photos = data);
  }

  onPreviewPhoto(index: number):void{
    this.showMask = true;
    this.previewPhoto = true;
    this.showCount = true;
    this.editing = false;
    this.currentIndex = index;
    this.currentPhoto = this.photos[index];
    this.totalImageCount = this.photos.length;
    this.controls = (this.totalImageCount > 1);
  }

  closePhoto():void{
    this.showMask = false;
    this.previewPhoto = false;
    this.showCount = false;
    this.controls = false;
    this.editing = false;
    this.currentIndex = 0;
  }

  edit(index:number):void{
    this.editing = true;
    this.controls = false;
  }

  deletePhoto(id:string):void{
    this.galleryService.deletePhoto(id).then(data => {
      if(data){        
        this.ngOnInit();
        this.closePhoto();
      }
    });
  }

  deletePhotos():void{
    if(this.checkedList.length > 0){
      this.galleryService.deletePhotos(this.checkedList).then(data => {
        if(data){
          this.ngOnInit();
          this.closePhoto();
        }
      });
    }
  }

  moveLeft(index:number):void{
    if(index <= 0){
      this.currentIndex = this.photos.length - 1;
    }else{
      this.currentIndex -= 1;
    }
    this.currentPhoto = this.photos[this.currentIndex];
  }

  moveRight(index:number):void{
    if(index >= this.photos.length - 1){
      this.currentIndex = 0;
    }else{
      this.currentIndex += 1;
    }
    this.currentPhoto = this.photos[this.currentIndex];
  }

  clickSelect(id:string){
    let ind = this.checkedList.findIndex(x => x == id);
    if(ind < 0){
      this.checkedList.push(id);
    }else{
      this.checkedList.splice(ind,1);
    }
  }
}
