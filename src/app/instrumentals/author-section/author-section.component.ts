import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../core/interfaces/author';

@Component({
  selector: 'app-author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.css']
})
export class AuthorSectionComponent implements OnInit {

  @Input() author: Author;
  
  constructor() { }

  ngOnInit() {
  }

}
