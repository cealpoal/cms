import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})
export class GalleryFormComponent implements OnInit {
  //photoSelected: string | ArrayBuffer;
  photoSelected: any;
  file: File = new File([],'');

  constructor(private photoService: GalleryService, private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    // this.photoService
    //   .createPhoto(title.value, description.value, this.file)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.router.navigate(['/photos'])
    //     },
    //     err => console.log(err)
    //   );
    return false;
  }
}
