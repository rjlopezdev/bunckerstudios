import { Component, OnInit } from '@angular/core';
import { Form } from '../../core/interfaces/form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  private readyToSend: boolean
  public form: Form
  constructor() { }

  ngOnInit() {
  }

}
