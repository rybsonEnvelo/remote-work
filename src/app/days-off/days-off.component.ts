import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSpanApi } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainModalComponent } from '../main/main-modal/main-modal.component';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import plLocale from '@fullcalendar/core/locales/pl';
import { ModalOffComponent } from './modal-off/modal-off.component';
import { DaysOffService } from './days-off.service';

@Component({
  selector: 'app-days-off',
  templateUrl: './days-off.component.html',
  styleUrls: ['./days-off.component.scss'],
})
export class DaysOffComponent implements OnInit {
  public calendarOptions!: CalendarOptions;
  private disallowedDays: string[] = [];
  private daysOff!: {
    date: string;
    display: string;
    backgroundColor: string;
  }[];

  constructor(
    private modalService: NgbModal,
    private daysOffService: DaysOffService
  ) {}

  ngOnInit(): void {
    this.daysOffService.daysOff$.subscribe((e) => {
      this.daysOff = e;
      this.setCalendarOptions();
    });
  }

  setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'pl',
      locales: [plLocale],
      height: 650,
      selectable: true,
      events: [...this.daysOff],
      showNonCurrentDates: false,
      fixedWeekCount: false,
      select: (args) => {
        if (this.hasDateEvents(args.startStr)) this.addDayOff(args.startStr);
      },
      // selectAllow: (selectInfo) => {
      //   return this.disallowDays(selectInfo);
      // },
    };
  }

  disallowDays(selectInfo: DateSpanApi) {
    return this.disallowedDays.includes(selectInfo.startStr) ? false : true;
  }

  addDayOff(date: string) {
    const modalRef = this.modalService.open(ModalOffComponent);
    modalRef.componentInstance.date = date;
  }

  hasDateEvents(date: string) {
    const dates = this.daysOff.map((e) => e.date);
    return dates.includes(date) ? false : true;
  }
}
