import {Component, NgModule} from '@angular/core';
import {EchoServiceApi} from 'angular_bazel_example/api/echo_service_openapi_angular_service_codegen';
import {msg} from '../lib/file';

@Component({
  selector: 'hello-world-app',
  template: `
    <div>Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
  `,
  styleUrls: ['./hello-world-styles.css']
})
export class HelloWorldComponent {
  name: string = msg;
}
