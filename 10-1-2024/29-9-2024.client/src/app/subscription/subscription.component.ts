import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  ngOnInit() {
    this.getleen()
  }

  constructor(private _ser: URLService) {

  }

  subscriptionArry: any
  getleen() {
    this._ser.getSubscription().subscribe((data) => {
      this.subscriptionArry = data
    })
  }
}
