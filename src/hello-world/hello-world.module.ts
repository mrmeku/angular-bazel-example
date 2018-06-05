import {NgModule} from '@angular/core';
import {ApiModule} from 'angular_bazel_example/api/echo_service_typescript_angular';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  imports: [ApiModule],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}
