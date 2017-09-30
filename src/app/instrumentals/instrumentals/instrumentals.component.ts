import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../core/services/database.service';
import { Author } from '../../core/interfaces/author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-instrumentals',
  templateUrl: './instrumentals.component.html',
  styleUrls: ['./instrumentals.component.css']
})
export class InstrumentalsComponent implements OnInit {

  public _authors : Observable<Author[]>;

  constructor(private _dbservice : DatabaseService) { }

  ngOnInit() {
    this._authors = this._dbservice.getAuthors();
  }

}
