import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WelcomeComp} from './welcome.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoApp} from './demoapp.component';
import {FormsModule} from '@angular/forms'
import { MycompComponent } from './mycomp/mycomp.component';
import { UsercompComponent } from './usercomp/usercomp.component'
import {UserService} from './shared/mydata.service'
@NgModule({
  declarations: [
    AppComponent,WelcomeComp,DemoApp, MycompComponent, UsercompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
