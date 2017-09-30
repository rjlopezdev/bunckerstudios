import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSelected : string
  public images = [
    "../../assets/images/background/background_1.jpg",
    "../../assets/images/background/background_2.jpg"
  ]
  constructor() {
    this.imageSelected = (this.getRandomBackground(0, 1) == 0) ? this.images[0] : this.images[1]
   }

  ngOnInit() {
    $.backstretch(this.imageSelected)
  }

  ngOnDestroy(){
    $.backstretch("destroy")
  }

  private getRandomBackground(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
