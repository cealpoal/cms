import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  private bodyElement:any;
  show:boolean = false;
  menu:any[] = [
    {
      path: '/news',
      tool: 'Noticias',
      icon: 'bx-news',
      text: 'Noticias'
    },
    {
      path: '/photos',
      tool: 'Gallería',
      icon: 'bx-photo-album',
      text: 'Gallería'
    },
    {
      path: '/contactus',
      tool: 'Contáctenos',
      icon: 'bxs-contact',
      text: 'Contáctenos'
    }
  ];
  
  constructor(){
    this.bodyElement = document.body;
  }

  ngOnInit(): void {    
  }

  showHide(){
    this.show = !this.show;
  }

  changeMode(){
    this.bodyElement.classList.toggle("dark");
  }
}
