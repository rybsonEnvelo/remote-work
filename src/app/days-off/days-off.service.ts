import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DaysOffService {
  daysOff = new BehaviorSubject<
    {
      date: string;
      display: string;
      backgroundColor: string;
    }[]
  >([]);

  get daysOff$() {
    return this.daysOff.asObservable();
  }

  constructor(private apiService: ApiService, private toastr: ToastrService) {
    this.getDaysOff()
      .pipe(
        map((e) => {
          return e.map((date) => {
            return this.convertDeclarationToCalendarEvent(date);
          });
        }),
        tap(console.error)
      )
      .subscribe((e) => this.daysOff.next(e));
  }

  convertDeclarationToCalendarEvent(date: { day: string }) {
    return {
      date: date.day,
      display: 'background',
      backgroundColor: 'black',
    };
  }

  addDayOff(day: { day: string }) {
    return this.apiService.addDayOff(day).subscribe({
      next: (day) => {
        const newCalendarEvent = this.convertDeclarationToCalendarEvent(day);
        const newValue = [...this.daysOff.getValue()!, newCalendarEvent];
        this.daysOff.next(newValue);

        this.toastr.success('Sukaces!', 'Dodano prawidłowo');
      },
      error: () => {
        this.toastr.error('Coś poszło nie tak.', 'Spróbuj ponownie');
      },
    });
  }

  getDaysOff() {
    return this.apiService.getDaysOff();
  }
}
