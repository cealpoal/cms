import { Component, OnInit } from '@angular/core';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})
export class GalleryFormComponent implements OnInit {
  constructor(){}

  ngOnInit(){    
  }
}
