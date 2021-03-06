import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewbydeptComponent } from './viewbydept/viewbydept.component';
import { ViewbyidComponent } from './viewbyid/viewbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    EditempComponent,
    ViewallComponent,
    ViewbydeptComponent,
    ViewbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
