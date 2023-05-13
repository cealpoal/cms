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
  id: string = '';
  photo: galleryResponse = {
    id: '',
    description: '',
    inscription: new Date(),
    path: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.galleryService.getPhoto(this.id)
        .then(res => {
            this.photo = res;
          }
        )
    });
  }

  deletePhoto(id: string) {
    this.galleryService.deletePhoto(id)
      .then(res => {
        this.router.navigate(['/photos']);
      })
  }

  updatePhoto(inscription: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    // this.galleryService.updatePhoto(this.photo._id, title.value, description.value)
    //   .subscribe(res => {
    //     console.log(res);
    //     this.router.navigate(['/photos']);
    //   });
    return false;
  }

}
