
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldModule} from './public-api';

@NgModule({
  imports: [BrowserModule, HelloWorldModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
