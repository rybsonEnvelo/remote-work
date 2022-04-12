import { Component, OnInit } from '@angular/core';
import { DefaultDeclaration } from '../shared/Interfaces/DefaultDeclaration.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  defaultDeclarations: DefaultDeclaration = {
    mondayDeclaration: 'OFFICE',
    tuesdayDeclaration: 'OFFICE',
    wednesdayDeclaration: 'OFFICE',
    thursdayDeclaration: 'OFFICE',
    fridayDeclaration: 'OFFICE',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  changeMondayDeclaration() {
    if (this.defaultDeclarations.mondayDeclaration === 'OFFICE') {
      this.defaultDeclarations.mondayDeclaration = 'REMOTE';
    } else if (this.defaultDeclarations.mondayDeclaration === 'REMOTE') {
      this.defaultDeclarations.mondayDeclaration = 'OFFICE';
    }
  }

  changeTuesdayDeclaration() {
    if (this.defaultDeclarations.tuesdayDeclaration === 'OFFICE') {
      this.defaultDeclarations.tuesdayDeclaration = 'REMOTE';
    } else if (this.defaultDeclarations.tuesdayDeclaration === 'REMOTE') {
      this.defaultDeclarations.tuesdayDeclaration = 'OFFICE';
    }
  }

  changeWednesdayDeclaration() {
    if (this.defaultDeclarations.wednesdayDeclaration === 'OFFICE') {
      this.defaultDeclarations.wednesdayDeclaration = 'REMOTE';
    } else if (this.defaultDeclarations.wednesdayDeclaration === 'REMOTE') {
      this.defaultDeclarations.wednesdayDeclaration = 'OFFICE';
    }
  }

  changeThursdayDeclaration() {
    if (this.defaultDeclarations.thursdayDeclaration === 'OFFICE') {
      this.defaultDeclarations.thursdayDeclaration = 'REMOTE';
    } else if (this.defaultDeclarations.thursdayDeclaration === 'REMOTE') {
      this.defaultDeclarations.thursdayDeclaration = 'OFFICE';
    }
  }

  changeFridayDeclaration() {
    if (this.defaultDeclarations.fridayDeclaration === 'OFFICE') {
      this.defaultDeclarations.fridayDeclaration = 'REMOTE';
    } else if (this.defaultDeclarations.fridayDeclaration === 'REMOTE') {
      this.defaultDeclarations.fridayDeclaration = 'OFFICE';
    }
  }

  sendDefaultDeclarations() {
    this.apiService
      .postDefultDeclarations(this.defaultDeclarations)
      .subscribe();
  }
}
