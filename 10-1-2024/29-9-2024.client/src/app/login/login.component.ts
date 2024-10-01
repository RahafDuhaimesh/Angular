import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit() {

  }
  constructor(private _ser: URLService, private _router: Router) {

  }

  login(data:any) {
    var formdata = new FormData();
    for (let item in data) {
      formdata.append(item, data[item])
    }

    this._ser.Login(formdata).subscribe(() => {
      this._router.navigate(['/']);
    }, (error) => {
      alert(error.error)
    })


  }
}
