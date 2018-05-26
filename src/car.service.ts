import {Headers, Http, ResponseContentType} from '@angular/http';
import * as Schema from 'api_schemas_with_bazel/schema/car_ts_proto';
import * as protobuf from 'protobufjs';
import {bindNodeCallback, Observable, Subject} from 'rxjs';

export class CarService {
  readonly getCars: (request: Schema.GetCarsRequest) => Observable<Schema.GetCarsResponse> =
      this.bind<Schema.GetCarsRequest, Schema.GetCarsResponse>('getCars', ({getCars}) => getCars);
  //   bindNodeCallback<Schema.GetCarsRequest, Schema.GetCarsResponse>(this.getCarsService.getCars)
  //       .bind(this.getCarsService);

  constructor(private readonly http: Http) {}

  bind<Request, Response>(methodName: string, getMethod: (s: Schema.CarService) => any) {
    const carService = this.carServiceForMethod(methodName);
    return bindNodeCallback<Schema.GetCarsRequest, Schema.GetCarsResponse>(carService.getCars)
        .bind(carService);
  }

  private carServiceForMethod(methodName: string): Schema.CarService {
    return Schema.CarService.create((_, requestData, callback) => {
      const headers = new Headers();
      headers.set('Access-Control-Allow-Origin', 'http://localhost:8080');
      headers.set('Content-Type', 'application/x-protobuf');

      this.http
          .post(
              `http://localhost:8080/cars?method=${methodName}`, new Blob([requestData]),
              {headers, responseType: ResponseContentType.ArrayBuffer})
          .subscribe(
              response => callback(null, new Uint8Array(response.arrayBuffer())),
              error => callback(error));
    });
  }
}
