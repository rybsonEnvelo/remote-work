import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { Declaration } from '../shared/Interfaces/Declaration.model';
import { DeclarationType } from '../shared/enums/DeclarationType.enum';

@Injectable({
  providedIn: 'root',
})
export class UserDeclarationsService {
  constructor(private apiService: ApiService) {}

  getUserDeclarations(): Observable<CalendarEvent[]> {
    return this.apiService.getUserDeclarations().pipe(
      map((decalarations) =>
        decalarations.filter(
          (dec) => dec.declarationType !== DeclarationType.REMOTE
        )
      ),
      // map((declarations) => declarations.map),
      map((declarations: Declaration[]) => {
        return declarations.map(
          (declaration) =>
            ({
              date: declaration.day,
              display: 'background',
              backgroundColor:
                declaration.declarationType === DeclarationType.ABSENT
                  ? 'red'
                  : 'blue',
              title:
                declaration.declarationType === DeclarationType.ABSENT
                  ? 'nieobecny'
                  : 'w biurze',
            } as CalendarEvent)
        );
      })
    );
  }
}
