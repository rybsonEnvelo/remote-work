import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { CalendarEvent } from '../shared/Interfaces/CalendarEvent.model';
import { Declaration } from '../shared/Interfaces/Declaration.model';

@Injectable({
  providedIn: 'root',
})
export class UserDeclarationsService {
  constructor(private apiService: ApiService) {}

  getUserDeclarations(): Observable<CalendarEvent[]> {
    return this.apiService.getUserDeclarations().pipe(
      map((products: Declaration[]) => {
        return products.map(
          (product) =>
            ({
              date: product.date,
              display: 'background',
            } as CalendarEvent)
        );
      })
    );
  }
}
