import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app.component';
import { FbService } from "../shared/fb.service";

import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/share';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class MainModule {
}
