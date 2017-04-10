import {AngularFire} from 'angularfire2';

import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public temp: any = '????????????????????';

  constructor(private af: AngularFire) {
  }

  ngOnInit(): void {
    this.af.database.list('/temps', {query: {limitToLast: 1}})
      .subscribe((stuff) => {
        if (stuff.length > 0) {
          this.temp = stuff[0].v.toFixed(2);
        }
      });
  }
}
