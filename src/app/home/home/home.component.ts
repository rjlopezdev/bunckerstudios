import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.backstretch("../../assets/images/background/background_1.jpg")
  }

  ngOnDestroy(){
    $.backstretch("destroy")
  }

}
