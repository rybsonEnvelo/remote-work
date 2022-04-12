import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dateMonthOptions = [
    {
      date: 'Wybierz miesiac',
    },
    {
      date: 'kwiecien',
    },
    {
      date: 'maj',
    },
    {
      date: 'czerwiec',
    },
  ];

  dateYearOptions = [
    {
      date: 'Wybierz miesiac',
    },
    {
      date: 'kwiecien',
    },
    {
      date: 'maj',
    },
    {
      date: 'czerwiec',
    },
  ];
}
