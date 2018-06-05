import 'rxjs/add/operator/map';

import {Component, NgModule} from '@angular/core';
import {EchoServiceService, ExamplepbSimpleMessage} from 'angular_bazel_example/api/echo_service_typescript_angular';
import {Observable} from 'rxjs/Observable';

import {msg} from '../lib/file';

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name: string = msg;

  response = this.echoServiceService.echo('id');

  constructor(private readonly echoServiceService: EchoServiceService) {}
}
