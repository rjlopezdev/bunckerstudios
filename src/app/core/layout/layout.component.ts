import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

declare var $ : any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _translate: TranslateService) {
    this._translate.setDefaultLang('es')
    this._translate.use('es')
  }

  ngOnInit() {
    $('.side-nav').sideNav();
  }

  ngAfterViewInit() {
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    })
  }

}
