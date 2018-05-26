package backend;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import com.google.protobuf.RpcCallback;
import com.google.protobuf.Message;

import schema.GetCarsRequest;

import schema.Car;
import schema.GetCarsResponse;

public class CarsServlet extends HttpServlet {
  private static final CarService carService = new CarService();

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    setAccessControlHeaders(response);
    response.setContentType("application/x-protobuf");

    switch (request.getQueryString().replace("method=", "")) {
      case "getCars":
        RpcCallback<GetCarsResponse> callback = getCallback(response);

        GetCarsRequest getCarsRequest = GetCarsRequest.parseFrom(request.getInputStream());
        carService.getCars(new RpcController(), getCarsRequest, callback);
        // carService.getCars(new RpcController(), GetCarsRequest.getDefaultInstance(), callback);
        break;
      default:
        response.setStatus(HttpServletResponse.SC_NOT_IMPLEMENTED);
    }
  }

  @Override
  public void doOptions(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    setAccessControlHeaders(response);
    response.setStatus(HttpServletResponse.SC_OK);
  }

  private static <M extends Message> RpcCallback<M> getCallback(HttpServletResponse response) {
    return new RpcCallback<M>() {
      public void run(M message) {
        try {
          message.writeTo(response.getOutputStream());
          response.setStatus(HttpServletResponse.SC_OK);
        } catch (IOException e) {
          response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
      }
    };
  }

  private void setAccessControlHeaders(HttpServletResponse response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST");
    response.setHeader("Access-Control-Allow-Headers", "*");
  }
}
