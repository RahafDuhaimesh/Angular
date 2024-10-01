import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  ngOnInit() {
    this.getServices();
  }

  constructor(private _ser: URLService) {

  }
  servicesArray : any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
    }
    )
  }
}
