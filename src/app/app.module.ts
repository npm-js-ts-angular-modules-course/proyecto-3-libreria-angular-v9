
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { Mugan86YoutubeApiModule } from 'mugan86-youtube-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mugan86YoutubeApiModule.forRoot({
      apiKey: environment.apiKey,
      showLog: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
