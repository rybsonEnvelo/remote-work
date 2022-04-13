import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DaysOffService } from '../days-off.service';

@Component({
  selector: 'app-modal-off',
  templateUrl: './modal-off.component.html',
  styleUrls: ['./modal-off.component.scss'],
})
export class ModalOffComponent implements OnInit {
  @Input() date = '';
  toggle = new FormControl(false);

  constructor(
    public activeModal: NgbActiveModal,
    private daysOffService: DaysOffService
  ) {}

  ngOnInit(): void {}

  close() {
    this.activeModal.close('Close click');

    if (this.toggle.value) this.daysOffService.addDayOff({ day: this.date });
  }
}
