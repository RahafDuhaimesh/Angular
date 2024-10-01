import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServiceComponent,
    SubServicesComponent,
    SubscriptionComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
      FormsModule,
      BrowserModule, HttpClientModule,
      AppRoutingModule,
      RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" }, //its default page(when we make the path empty)
      { path: "Services", component: ServiceComponent },
      { path: "SubServices/:id", component: SubServicesComponent },
      { path: "AddUser", component: RegisterComponent },
      {path: "login" , component : LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
