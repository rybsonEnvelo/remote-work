import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSpanApi } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainModalComponent } from '../main/main-modal/main-modal.component';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import plLocale from '@fullcalendar/core/locales/pl';
import { ModalOffComponent } from './modal-off/modal-off.component';

@Component({
  selector: 'app-days-off',
  templateUrl: './days-off.component.html',
  styleUrls: ['./days-off.component.scss'],
})
export class DaysOffComponent implements OnInit {
  public calendarOptions!: CalendarOptions;
  private calendarEvents!: CalendarEvent[];
  private disallowedDays: string[] = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.setCalendarOptions();
  }

  setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'pl',
      locales: [plLocale],
      height: 650,
      selectable: true,
      // events: [...this.calendarEvents],
      showNonCurrentDates: false,
      fixedWeekCount: false,
      select: (args) => {
        // if (this.hasDateEvents(args.startStr))
        this.addDeclaration(args.startStr);
      },
      // selectAllow: (selectInfo) => {
      //   return this.disallowDays(selectInfo);
      // },
    };
  }

  disallowDays(selectInfo: DateSpanApi) {
    return this.disallowedDays.includes(selectInfo.startStr) ? false : true;
  }

  addDeclaration(date: string) {
    const modalRef = this.modalService.open(ModalOffComponent);
    modalRef.componentInstance.date = date;
  }

  hasDateEvents(date: string) {
    const dates = this.calendarEvents.map((e) => e.date);
    return dates.includes(date) ? false : true;
  }
}
