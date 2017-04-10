import * as firebase from "firebase/app";
import "firebase/database";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

const firebaseConfig = {
  apiKey: 'AIzaSyDbXrSnkSiAV-CqT1gDY5g0ZMXpK-6w3vg',
  authDomain: 'isithotinhereorisitjustm-91e09.firebaseapp.com',
  databaseURL: 'https://isithotinhereorisitjustm-91e09.firebaseio.com',
  projectId: 'isithotinhereorisitjustm-91e09',
  storageBucket: 'isithotinhereorisitjustm-91e09.appspot.com',
  messagingSenderId: '795947221771'
};

@Injectable()
export class FbService {

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  stuff(): Observable<any> {
    return Observable.create((obs: any) => {
      let fb = firebase.database().ref('temps').limitToLast(30);

      fb.on('child_added', (child) => obs.next(child.val()));
    });
  }
}