import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-off',
  templateUrl: './modal-off.component.html',
  styleUrls: ['./modal-off.component.scss'],
})
export class ModalOffComponent implements OnInit {
  @Input() date = '';
  toggle = new FormControl(false);

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  close() {
    this.activeModal.close('Close click');
  }
}
