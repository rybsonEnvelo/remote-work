import { Component, OnInit } from '@angular/core';

interface Country {
  date: string;
  stationary: number;
  remote: number;
  absent: number;
}

const COUNTRIES: Country[] = [
  {
    date: '12-04-2022',
    stationary: 15,
    remote: 15,
    absent: 3,
  },
  {
    date: '12-04-2022',
    stationary: 26,
    remote: 5,
    absent: 1,
  },
  {
    date: '12-04-2022',
    stationary: 15,
    remote: 18,
    absent: 0,
  },
  {
    date: '12-04-2022',
    stationary: 22,
    remote: 3,
    absent: 8,
  },
];

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  countries = COUNTRIES;

  constructor() {}

  ngOnInit(): void {}
}
