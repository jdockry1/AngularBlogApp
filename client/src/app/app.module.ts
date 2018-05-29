import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommonService } from './service/common.service';
import { ShowPostService } from './show-post/show-post.service';
import { SignupComponent } from './signup/signup.component';
import { AlertComponent } from './alerts/alert.component';
import { AlertService } from './alerts/alert.service';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    AddPostComponent,
    SignupComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService, ShowPostService, AlertService],
  bootstrap: [RootComponent]
})
export class AppModule { }
