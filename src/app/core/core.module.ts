import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [LayoutComponent, FooterComponent],
  exports: [
    LayoutComponent,
    FooterComponent,
    TranslateModule
  ]
})
export class CoreModule { }
