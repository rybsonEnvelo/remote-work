import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
  @Input() my_modal_title = '';
  @Input() my_modal_content = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
