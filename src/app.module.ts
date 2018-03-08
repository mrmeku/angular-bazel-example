// If you uncomment out the below imports the test will fail.

import {NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldModule} from './hello-world/hello-world.module';

@NgModule({
  imports: [
    // BrowserModule,
    HelloWorldModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
