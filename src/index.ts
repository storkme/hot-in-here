import { select, axisBottom, axisLeft, line, extent } from 'd3';
import { scaleLinear, scaleTime } from 'd3-scale';
import { max } from 'd3-array';
import * as firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;

const ITEMS = 100;
const config = {
  apiKey: 'AIzaSyDbXrSnkSiAV-CqT1gDY5g0ZMXpK-6w3vg',
  authDomain: 'isithotinhereorisitjustm-91e09.firebaseapp.com',
  databaseURL: 'https://isithotinhereorisitjustm-91e09.firebaseio.com',
  projectId: 'isithotinhereorisitjustm-91e09',
  storageBucket: 'isithotinhereorisitjustm-91e09.appspot.com',
  messagingSenderId: '795947221771'
};
const t = timer();

const wrapper = document.getElementById('wrapper');
const margin = {top: 40, right: 40, bottom: 50, left: 65};
const width = 960 - margin.left - margin.right - 50;
const height = 540 - margin.top - margin.bottom - 50;

// set the ranges
const x = scaleTime().range([0, width]);
const y = scaleLinear().range([height, 0]);

const valueline = line()
  .x((d: any) => x(d.t))
  .y((d: any) => y(d.v));

const svg = select(wrapper)
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform',
    'translate(' + margin.left + ',' + margin.top + ')');

const fb = firebase.initializeApp(config).database().ref('temps').limitToLast(ITEMS);

// Add the X Axis
svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + height + ')');

// Add the Y Axis
svg.append('g')
  .attr('class', 'y axis');

svg.append('path')
  .attr('class', 'line');

fb.on('child_added', buffer(
  (data: Datum[]) => {
    console.log(`${t()} buffer`, data);

    x.domain(extent(data, (d) => d.t));
    y.domain([15, max(data, (d) => d.v)]);

    svg.select('.x.axis')
      .call(axisBottom(x));

    svg.select('.y.axis')
      .call(axisLeft(y));

    svg.select('.line')
      .data([data])
      .attr('d', valueline(<any>data));
  }, ITEMS, (d: DataSnapshot) => d.val())
);


function buffer<T, V>(callback: (accumulator: V[]) => void, n: number, selector: (e: T) => V) {
  let i = 0;
  let buf: V[] = Array(n);
  return (child: T) => {
    if (i < n) {
      buf[i++] = selector(child);
      if (i === n) {
        callback(buf);
      }
    } else {
      buf = [...buf.slice(1), selector(child)];
      callback(buf);
    }
  };
}

function timer() {
  const t0 = Date.now();
  return () => Date.now() - t0;
}

interface Datum {
  t: number;
  v: number;
}