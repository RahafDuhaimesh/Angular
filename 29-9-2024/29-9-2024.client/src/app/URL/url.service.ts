import { HttpClient } from '@angular/common/http'; //This is a module from Angular's @angular/common/http package. It allows the service to make HTTP requests (like GET, POST, PUT, DELETE) to interact with backend APIs. In this case, it will be used to send a GET request.
import { Injectable } from '@angular/core'; //This is a decorator from @angular/core. It marks the service as something that can be injected into other components or services. It makes this class eligible for Dependency Injection (DI).
import { Observable } from 'rxjs';
//This is part of the RxJS (Reactive Extensions for JavaScript) library, which is bundled with Angular. Observables represent a continuous stream of data that can be subscribed to and handled asynchronously.
//When making an HTTP request in Angular, you usually get an Observable as a response.The observable can emit multiple values over time(or just one value, as is typical in HTTP requests), and you can "subscribe" to it to get the actual result.

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http : HttpClient) { }

  staticData = "http://localhost:5083/api";
  URLforAllAServices = `${this.staticData}/Services`;


  getServices(): Observable<any> {

    return this.http.get<any>(this.URLforAllAServices)
  }

  getSubServices(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID?id=${id}`);
  }
}
