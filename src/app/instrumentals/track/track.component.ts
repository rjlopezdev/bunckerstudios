import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Track } from '../../core/interfaces/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    @ViewChild('iframe') iframe: any;
    
    //Track from tracklist
    @Input() track: Track
  
    //Iframe is loaded flag
    isLoad: boolean
    
    constructor( private sanitizer: DomSanitizer) { }
  
    ngOnInit() {
      this.sanitizeUrl()
    }
    
    public sanitizeUrl() {
      this.track.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.track.url)
    }
  
    public hidePreloader(event: Event): void {
      this.isLoad = true
    }

    ngAfterViewInit() {
      this.iframe.nativeElement.addEventListener('load', this.onLoad.bind(this));
    }

    onLoad(e) {
        console.log('onLoad executed', e);
    }
  
  }
  
