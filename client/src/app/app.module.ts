import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route';

import { AppComponent } from './app.component';
import { customHttpProvider } from './helper/custom-http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './gaurds/auth.gaurds';
import { AlertService, } from './services/alert.service';
import { AuthenticationService} from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule

  ],
  providers: [AuthGuard,AlertService,AuthenticationService,UserService,customHttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
