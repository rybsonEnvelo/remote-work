import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DefaultDeclaration } from '../shared/Interfaces/DefaultDeclaration.model';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultDeclarationsService {
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  defaultDeclarations: DefaultDeclaration[] = [
    {
      day: 1,
      isRemote: false,
    },
    {
      day: 2,
      isRemote: false,
    },
    {
      day: 3,
      isRemote: false,
    },
    {
      day: 4,
      isRemote: false,
    },
    {
      day: 5,
      isRemote: false,
    },
  ];

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
}
