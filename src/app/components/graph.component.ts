import {AfterViewInit, Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'graph',
  template: '<canvas #garbage  style="height:100%;width:100%;"></canvas>'
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('garbage') canvasRef: ElementRef;
  @Input() entries: Observable<number>;
  offset = 0;

  ngAfterViewInit(): void {
    // resize the canvas ?____?
    // should probably re-resize it if the window changes size.
    const e = this.canvasRef.nativeElement;
    e.height = e.clientHeight;
    e.width = e.clientWidth;
    const ctx = e.getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 0, e.height);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'rgb(100,100,100)');
    ctx.fillStyle = gradient;

    let w = 1;
    let padding = 3;

    this.entries.subscribe(
      (next: any) => {
        // normalize it kinda
        let temp = next.v - 15;

        let f = ctx.getImageData(0, 0, e.width, e.height);
        ctx.clearRect(0, 0, e.width, e.height);
        ctx.putImageData(f, -w - padding, 0);
        ctx.fillRect(e.width - w, e.height - ((temp * e.height) / 50), e.width, e.height);
      }
    )
  }
}