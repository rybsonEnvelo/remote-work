import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'src/app/shared/Interfaces/CalendarEvent.model';
import { UserDeclarationsService } from '../user-declarations.service';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
  @Input() date = '';
  @Input() currentEvent?: CalendarEvent;
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

    if (this.currentEvent) this.select?.setValue(this.currentEvent.type);
  }

  close() {
    this.activeModal.close('Close click');

    if (this.currentEvent) {
    }

    this.userDeclarationsService.addUserDeclaration({
      day: this.date,
      declarationType: this.select!.value,
    });
  }
}
