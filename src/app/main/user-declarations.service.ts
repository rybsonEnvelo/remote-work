import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { Declaration } from '../shared/Interfaces/Declaration.model';
import { DeclarationType } from '../shared/enums/DeclarationType.enum';

@Injectable({
  providedIn: 'root',
})
export class UserDeclarationsService {
  userDeclarations = new BehaviorSubject<CalendarEvent[] | null>(null);

  get userDeclarations$() {
    return this.userDeclarations.asObservable();
  }

  constructor(private apiService: ApiService) {
    this.getUserDeclarations().subscribe((e) => this.userDeclarations.next(e));
  }

  getUserDeclarations(): Observable<CalendarEvent[]> {
    return this.apiService.getUserDeclarations().pipe(
      map((decalarations) =>
        decalarations.filter(
          (dec) => dec.declarationType !== DeclarationType.REMOTE
        )
      ),
      map((declarations: Declaration[]) => {
        return declarations.map((declaration) =>
          this.convertDeclarationToCalendarEvent(declaration)
        );
      })
    );
  }

  convertDeclarationToCalendarEvent(declaration: Declaration) {
    return {
      date: declaration.day,
      display: 'background',
      backgroundColor:
        declaration.declarationType === DeclarationType.ABSENT ? 'red' : 'blue',
      title:
        declaration.declarationType === DeclarationType.ABSENT
          ? 'nieobecny'
          : 'w biurze',
    } as CalendarEvent;
  }

  addUserDeclaration(declaration: Partial<Declaration>) {
    this.apiService.addUserDeclaration(declaration).subscribe({
      next: (declaration) => {
        const newCalendarEvent =
          this.convertDeclarationToCalendarEvent(declaration);
        const newValue = [
          ...this.userDeclarations.getValue()!,
          newCalendarEvent,
        ];
        this.userDeclarations.next(newValue);
      },
      error: () => {
        console.log('errror');
        //display error
      },
    });
  }
}
