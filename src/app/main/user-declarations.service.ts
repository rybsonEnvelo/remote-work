import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserDeclarationsService {
  constructor(private apiService: ApiService) {}

  getUserDeclarations() {
    return this.apiService.getUserDeclarations();
  }
}
