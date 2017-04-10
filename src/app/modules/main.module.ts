import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from '../components/app.component';
import {AngularFireModule} from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDbXrSnkSiAV-CqT1gDY5g0ZMXpK-6w3vg',
  authDomain: 'isithotinhereorisitjustm-91e09.firebaseapp.com',
  databaseURL: 'https://isithotinhereorisitjustm-91e09.firebaseio.com',
  projectId: 'isithotinhereorisitjustm-91e09',
  storageBucket: 'isithotinhereorisitjustm-91e09.appspot.com',
  messagingSenderId: '795947221771'
};

@NgModule({
  imports: [BrowserModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule {
}
