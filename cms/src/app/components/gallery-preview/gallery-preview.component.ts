import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { galleryResponse } from 'src/app/dtos/responses';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {

  id: string;
  photo: galleryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router
  ) {
      this.id = '';
      this.photo = {
        path: '',
        id: '',
        description: '',
        inscription: new Date 
      };
   }

  ngOnInit() {
    
  }

  deletePhoto(id: string) {
    
  }

  updatePhoto(inscription: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    
    return false;
  }

}
