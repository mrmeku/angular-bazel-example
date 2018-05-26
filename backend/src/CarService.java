package backend;

import static schema.Manufacturer.TOYOTA;
import static schema.Manufacturer.HONDA;

import com.google.protobuf.RpcController;
import com.google.protobuf.RpcCallback;

import schema.Car;
import schema.GetCarsRequest;
import schema.Manufacturer;
import schema.GetCarsResponse;

public class CarService extends schema.CarService {
  private static final Car newCar(String model, Manufacturer manufacturer) {
    return Car.newBuilder().setModel(model).setManufacturer(manufacturer).build();
  }

  private static final Car TOYOTA_COROLLA = CarService.newCar("Corolla", TOYOTA);
  private static final Car TOYOTA_CAMRY = CarService.newCar("Camry", TOYOTA);
  private static final Car HONDA_CIVIC = CarService.newCar("Civic", HONDA);
  private static final Car HONDA_ACCORD = CarService.newCar("Accord", HONDA);

  public void getCars(
      RpcController controller, GetCarsRequest request, RpcCallback<GetCarsResponse> done) {
    switch (request.getManufacturer()) {
      case TOYOTA:
        done.run(
            GetCarsResponse.newBuilder().addCars(TOYOTA_COROLLA).addCars(TOYOTA_CAMRY).build());
        break;
      case HONDA:
        done.run(GetCarsResponse.newBuilder().addCars(HONDA_CIVIC).addCars(HONDA_ACCORD).build());
        break;
      default:
        done.run(
            GetCarsResponse.newBuilder().addCars(TOYOTA_COROLLA).addCars(TOYOTA_CAMRY).build());
    }
  }
}