
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExternalRuleModule} from 'external_rule';

import {AppComponent} from './app.component';
import {HelloWorldModule} from './hello-world/hello-world.module';

@NgModule({
  imports: [BrowserModule, HelloWorldModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
