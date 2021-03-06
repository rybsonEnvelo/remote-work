import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  Calendar,
  CalendarOptions,
  DateSelectArg,
  DateSpanApi,
} from '@fullcalendar/core';
import plLocale from '@fullcalendar/core/locales/pl';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { ApiService } from '../shared/services/api.service';
import { MainModalComponent } from './main-modal/main-modal.component';
import { UserDeclarationsService } from './user-declarations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public calendarOptions!: CalendarOptions;
  private calendarEvents!: CalendarEvent[];
  private disallowedDays: string[] = [];

  constructor(
    private userDeclarationsService: UserDeclarationsService,
    private modalService: NgbModal,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.userDeclarationsService.userDeclarations$.subscribe((events) => {
      if (events) {
        this.calendarEvents = events;
        this.setCalendarOptions();
      }

      this.apiService
        .getConfigResponse2({ username: 'user1', password: 'password' })
        .subscribe((resp) => {
          console.log(resp);
        });

      this.userDeclarationsService.daysOff$.subscribe(
        (dates) => (this.disallowedDays = dates)
      );
    });
  }

  setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'pl',
      locales: [plLocale],
      height: 650,
      selectable: true,
      events: [...this.calendarEvents],
      showNonCurrentDates: false,
      fixedWeekCount: false,
      select: (args) => {
        if (this.hasDateEvents(args.startStr))
          this.addDeclaration(args.startStr);
      },
      selectAllow: (selectInfo) => {
        return this.disallowDays(selectInfo);
      },
    };
  }

  disallowDays(selectInfo: DateSpanApi) {
    return this.disallowedDays.includes(selectInfo.startStr) ? false : true;
  }

  addDeclaration(date: string) {
    const modalRef = this.modalService.open(MainModalComponent);
    modalRef.componentInstance.date = date;
  }

  editDeclaration(date: string) {
    const modalRef = this.modalService.open(MainModalComponent);
    modalRef.componentInstance.date = date;
    modalRef.componentInstance.currentEvent = this.calendarEvents.filter(
      (e) => e.date === date
    )[0];
  }

  hasDateEvents(date: string) {
    const dates = this.calendarEvents.map((e) => e.date);
    return dates.includes(date) ? false : true;
  }
}
