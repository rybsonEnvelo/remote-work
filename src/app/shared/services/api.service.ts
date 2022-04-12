import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Declaration } from '../Interfaces/Declaration.model';
import { Summary } from '../Interfaces/Summary.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUserDeclarations() {
    return this.http.get<Declaration[]>(`${this.API_URL}declarations`);
  }

  getSummary() {
    return this.http.get<Summary>(`${this.API_URL}summary`);
  }

  addUserDeclaration(declaration: Partial<Declaration>) {
    return this.http.post<Declaration>(
      `${this.API_URL}declarations`,
      declaration
    );
  }

  getDaysOff() {
    return this.http.get<string[]>(`${this.API_URL}daysoff`);
  }
}
