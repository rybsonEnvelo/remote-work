import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import plLocale from '@fullcalendar/core/locales/pl';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'pl',
    locales: [plLocale],
    height: 650,
    events: [
      { title: 'event 1', date: '2022-04-01' },
      { title: 'event 2', date: '2019-04-02' },
      //tu przekzywać eventy
    ],
  };
}
