import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import plLocale from '@fullcalendar/core/locales/pl';
import { DateClickArg } from '@fullcalendar/interaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { MainModalComponent } from './main-modal/main-modal.component';
import { UserDeclarationsService } from './user-declarations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public calendarOptions!: CalendarOptions;
  private calendarEvents!: CalendarEvent[];
  private declarationsSubscription!: Subscription;

  constructor(
    private userDeclarationsService: UserDeclarationsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userDeclarationsService.userDeclarations$.subscribe((events) => {
      if (events) {
        this.calendarEvents = events;
        this.setCalendarOptions();
      }
    });
  }

  ngOnDestroy(): void {
    this.declarationsSubscription.unsubscribe();
  }

  setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: 'pl',
      locales: [plLocale],
      height: 650,
      events: [...this.calendarEvents],
      dateClick: this.open.bind(this),
    };
  }

  open(args: DateClickArg) {
    const modalRef = this.modalService.open(MainModalComponent);
    const formattedDate = `${args.date.getFullYear()}-${
      args.date.getMonth() + 1
    }-${args.date.getDate()}`.replace(/(^|\D)(\d)(?!\d)/g, '$10$2');

    modalRef.componentInstance.date = formattedDate;
  }
}
