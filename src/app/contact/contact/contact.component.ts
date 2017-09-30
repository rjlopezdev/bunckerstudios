import { Component, OnInit } from '@angular/core';
import { Form } from '../../core/interfaces/form';
import { FormServiceService } from '../../core/services/form-service/form-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  private readyToSend: boolean
  public form: Form
  constructor(private _form: FormServiceService) { }

  ngOnInit() {
  }

  public submitForm(){
    this._form.sendFormSpreeIO(this.form);
    console.log('efre')
  }

}
