import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import plLocale from '@fullcalendar/core/locales/pl';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { UserDeclarationsService } from './user-declarations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public calendarOptions!: CalendarOptions;
  private calendarEvents!: CalendarEvent[];

  constructor(private userDeclarationsService: UserDeclarationsService) {}
  ngOnInit(): void {
    this.userDeclarationsService.getUserDeclarations().subscribe((events) => {
      this.calendarEvents = events;
      this.setCalendarOptions();
    });
  }

  setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'pl',
      locales: [plLocale],
      height: 650,
      events: [...this.calendarEvents],
    };
  }
}
