import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MerlinService } from './shared/merlin/merlin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MerlinService ]
})
export class AppComponent {
  title = 'cms';


  constructor(private merlin:MerlinService) {}

  ngOnInit() {
    this.merlin.ReadFile();
    this.merlin.WriteFile();
  }
}
