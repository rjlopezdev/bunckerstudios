import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/languages', '.json');
}

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
