import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  ngOnInit() {
  }

  constructor(private _ser: URLService, private _router: Router) { }


  addUserRegester(data: any) {

    var form = new FormData();

    for (let key in data) {
      form.append(key, data[key])
    }



    this._ser.addUser(form).subscribe(() => {
      alert("user added")
      this._router.navigate([""])
    }),
      (error: { error: any; }) => {
        alert(error.error)
      }
  }

}
  
