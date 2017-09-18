import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './sound/sound.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoundComponent]
})
export class SoundModule { }
