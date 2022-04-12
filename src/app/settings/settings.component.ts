import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DefaultDeclaration } from '../shared/Interfaces/DefaultDeclaration.model';
import { ApiService } from '../shared/services/api.service';
import { DefaultDeclarationsService } from './default-declarations.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private defaultDeclarationsService: DefaultDeclarationsService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      monday: [false],
      tuesday: [false],
      wednesday: [false],
      thursday: [false],
      friday: [false],
    });

    this.form.valueChanges.subscribe(console.log);
  }

  sendDefaultDeclarations() {
    this.defaultDeclarationsService.sendDefaultDeclarations(
      this.generateDefaultDeclarations()
    );
  }

  generateDefaultDeclarations(): DefaultDeclaration[] {
    return this.defaultDeclarationsService.defaultDeclarations.map((e, i) => {
      let isRemote = false;
      if (e.day === 1) isRemote = this.form.get('monday')?.value;
      if (e.day === 2) isRemote = this.form.get('tuesday')?.value;
      if (e.day === 3) isRemote = this.form.get('wednesday')?.value;
      if (e.day === 4) isRemote = this.form.get('thursday')?.value;
      if (e.day === 5) isRemote = this.form.get('friday')?.value;

      return {
        day: e.day,
        isRemote: isRemote,
      };
    });
  }
}
