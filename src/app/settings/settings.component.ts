import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { filter, map, tap } from 'rxjs';
import { DeclarationType } from '../shared/enums/DeclarationType.enum';
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

    this.defaultDeclarationsService.userDefaultDeclarations$.subscribe((e) => {
      console.warn(e[0][0]);
      this.form
        .get('monday')
        ?.setValue(this.convertDeclarationTypeToValue(e[0][0].declarationType));
      this.form
        .get('tuesday')
        ?.setValue(this.convertDeclarationTypeToValue(e[0][1].declarationType));
      this.form
        .get('wednesday')
        ?.setValue(this.convertDeclarationTypeToValue(e[0][2].declarationType));
      this.form
        .get('thursday')
        ?.setValue(this.convertDeclarationTypeToValue(e[0][3].declarationType));
      this.form
        .get('friday')
        ?.setValue(this.convertDeclarationTypeToValue(e[0][4].declarationType));
    });
  }

  sendDefaultDeclarations() {
    this.defaultDeclarationsService.sendDefaultDeclarations(
      this.generateDefaultDeclarations()
    );
  }

  generateDefaultDeclarations(): DefaultDeclaration[] {
    return this.defaultDeclarationsService.defaultDeclarations.map((e) => {
      let declarationTypeTemp = DeclarationType.REMOTE;
      if (e.day === 'monday')
        declarationTypeTemp = this.convertValueToDeclarationType(
          this.form.get('monday')?.value
        );
      if (e.day === 'tuesday')
        declarationTypeTemp = this.convertValueToDeclarationType(
          this.form.get('tuesday')?.value
        );
      if (e.day === 'wednesday')
        declarationTypeTemp = this.convertValueToDeclarationType(
          this.form.get('wednesday')?.value
        );
      if (e.day === 'thursday')
        declarationTypeTemp = this.convertValueToDeclarationType(
          this.form.get('thursday')?.value
        );
      if (e.day === 'friday')
        declarationTypeTemp = this.convertValueToDeclarationType(
          this.form.get('friday')?.value
        );

      return {
        day: e.day,
        declarationType: declarationTypeTemp,
      };
    });
  }

  convertValueToDeclarationType(value: boolean) {
    return value === true ? DeclarationType.REMOTE : DeclarationType.OFFICE;
  }

  convertDeclarationTypeToValue(declarationType: DeclarationType) {
    return declarationType === DeclarationType.REMOTE ? false : true;
  }
}
