import { Component, Input, OnInit } from '@angular/core';
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

  photos: galleryResponse[] = [];
  checkedList: string[] = [];

  previewPhoto = false;
  showMask = false;
  editing = false;
  currentPhoto:galleryResponse = {
    path:'',
    id:'',
    description:'',
    inscription:new Date()
  };
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor(private galleryService:GalleryService){ }

  ngOnInit(): void {
    this.galleryService.getPhotos().then(data => this.photos = data);
  }

  onPreviewPhoto(index: number):void{
    this.showMask = true;
    this.previewPhoto = true;
    this.showCount = true;
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
    this.currentIndex = 0;
  }

  edit(index:number):void{
    alert('Pendiente modificación');
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
