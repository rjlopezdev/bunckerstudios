import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
