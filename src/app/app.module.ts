import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './components/home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    HttpModule,
    FormsModule,
    NgDatepickerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
