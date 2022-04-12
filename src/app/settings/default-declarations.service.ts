import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DeclarationType } from '../shared/enums/DeclarationType.enum';
import { DefaultDeclaration } from '../shared/Interfaces/DefaultDeclaration.model';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultDeclarationsService {
  defaultDeclarations: DefaultDeclaration[] = [
    {
      day: 'monday',
      declarationType: DeclarationType.REMOTE,
    },
    {
      day: 'tuesday',
      declarationType: DeclarationType.REMOTE,
    },
    {
      day: 'wednesday',
      declarationType: DeclarationType.REMOTE,
    },
    {
      day: 'thursday',
      declarationType: DeclarationType.REMOTE,
    },
    {
      day: 'friday',
      declarationType: DeclarationType.REMOTE,
    },
  ];

  private userDefaultDeclarations = new Subject<DefaultDeclaration[][]>();

  get userDefaultDeclarations$() {
    return this.userDefaultDeclarations.asObservable();
  }

  constructor(private apiService: ApiService, private toastr: ToastrService) {
    this.getDefaultDeclarations().subscribe((v) =>
      this.userDefaultDeclarations.next(v)
    );
  }

  sendDefaultDeclarations(defaultDeclarations: DefaultDeclaration[]) {
    this.apiService.postDefultDeclarations(defaultDeclarations).subscribe({
      next: () => {
        this.toastr.success(
          'Zadeklarowano format pracy na najbliższy miesiąc',
          'Sukces!'
        );
      },
      error: () => {
        this.toastr.error('Coś poszło nie tak.', 'Spróbuj ponownie.');
      },
    });
  }

  getDefaultDeclarations() {
    return this.apiService.getDefaultDeclarations();
  }
}
