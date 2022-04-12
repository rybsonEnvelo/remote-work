import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import plLocale from '@fullcalendar/core/locales/pl';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
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

  constructor(
    private userDeclarationsService: UserDeclarationsService,
    private modalService: NgbModal
  ) {}
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
      eventClick: function (args) {
        console.log(args);
        // open();
      },
    };
  }

  open() {
    const modalRef = this.modalService.open(MainModalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
}
