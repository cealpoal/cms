import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { galleryResponse } from 'src/app/dtos/responses';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  photos: galleryResponse[] = [];

  constructor(
    private galleryService: GalleryService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.galleryService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/gallery', id]);
  }
}
