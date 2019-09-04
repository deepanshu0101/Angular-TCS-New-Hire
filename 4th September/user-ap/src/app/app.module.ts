import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WelcomeComp} from './welcome.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoApp} from './demoapp.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MycompComponent } from './mycomp/mycomp.component';
import { UsercompComponent } from './usercomp/usercomp.component'
import {UserService} from './shared/mydata.service';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component'
@NgModule({
  declarations: [
    AppComponent,WelcomeComp,DemoApp, MycompComponent, UsercompComponent, ReactivedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
