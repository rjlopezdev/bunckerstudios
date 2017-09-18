import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorSectionComponent } from './author-section/author-section.component';
import { TrackComponent } from './track/track.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { InstrumentalsComponent } from './instrumentals/instrumentals.component';
import { DatabaseService } from '../core/services/database.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthorSectionComponent,
    TrackComponent,
    InstrumentalsComponent
  ],
  providers: [
    DatabaseService
  ]
})
export class InstrumentalsModule { }
