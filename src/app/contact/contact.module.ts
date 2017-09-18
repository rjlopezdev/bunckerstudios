import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from '../core/core.module';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
