import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDeclarationsService } from '../user-declarations.service';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
  @Input() date = '';
  form!: FormGroup;

  get select() {
    return this.form.get('select');
  }

  constructor(
    public activeModal: NgbActiveModal,
    private userDeclarationsService: UserDeclarationsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      select: [null, Validators.required],
    });
  }

  close() {
    this.activeModal.close('Close click');

    this.userDeclarationsService.addUserDeclaration({
      day: this.date,
      declarationType: this.select!.value,
    });
  }
}
