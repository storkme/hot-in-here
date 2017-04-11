import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '../components/app.component';
import {GraphComponent} from '../components/graph.component';
import {FbService} from "../shared/fb.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GraphComponent],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class MainModule {
}
