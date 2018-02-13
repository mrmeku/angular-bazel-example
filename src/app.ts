
import {Component, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';

import {HelloWorldModule} from './hello-world/hello-world.module';

@Component({selector: 'app-component', template: '<hello-world-app></hello-world-app>'})
export class BootstrapComponent {}

@NgModule({
  imports: [
    BrowserModule,
    HelloWorldModule,
    FlexLayoutModule,
  ],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
