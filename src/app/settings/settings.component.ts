import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.form);
  }

  createForm() {
    this.form = this.fb.group({
      mondayDeclaration: [false],
      tuesdayDeclaration: [false],
      wednesdayDeclaration: [true],
      thursdayDeclaration: [false],
      fridayDeclaration: [false],
    });
  }

  // changeDeclaration() {
  //   this.declaration = !this.declaration;
  // }

  daysOfWeek = [
    {
      day: 'poniedzialek',
    },
    {
      day: 'wtorek',
    },
    {
      day: 'sroda',
    },
    {
      day: 'czwartek',
    },
    {
      day: 'piatek',
    },
  ];
}
