import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CnitdServiceService} from './services/cnitd-service.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { McComponent } from './components/mc/mc.component';

@NgModule({
  declarations: [
    AppComponent,
    McComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule 
  ],
  providers: [CnitdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
