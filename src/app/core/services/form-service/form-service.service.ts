import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Form } from '../../interfaces/form';

@Injectable()
export class FormServiceService {

  constructor(private _http: Http) { }

  public sendFormSpreeIO(_form: Form) {
    this._http.post('http://formspree.io/personal@rjlopezmad.com',
      {
        data: {
          message: 'demo'
        }
      })
  }

}
