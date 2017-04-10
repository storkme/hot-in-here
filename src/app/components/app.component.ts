import {Component, OnInit} from '@angular/core';
import {FbService} from "../shared/fb.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public temp: any = 0;

  constructor(private fb: FbService) {
  }

  ngOnInit(): void {
    this.fb.stuff()
      .subscribe((stuff: any) => {
        this.temp = stuff.v.toFixed(2);
      });
  }
}