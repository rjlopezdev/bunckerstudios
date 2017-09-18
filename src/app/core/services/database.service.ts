import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Author } from "../interfaces/author";

@Injectable()
export class DatabaseService {

  constructor( private _http: Http ) { }

  public getAuthors(): Observable<Author[]> {
    return this._http.get('./../../assets/database/tracks_collection.json')
                    .map((response:Response) => <Author[]> response.json())
  }
}