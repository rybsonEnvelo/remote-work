import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Declaration } from '../Interfaces/Declaration.model';
import { DefaultDeclaration } from '../Interfaces/DefaultDeclaration.model';
import { Summary } from '../Interfaces/Summary.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUserDeclarations() {
    return this.http.get<Declaration[]>(`${this.API_URL}events`);
  }

  getSummary() {
    return this.http.get<Summary>(`${this.API_URL}summary`);
  }

  postDefultDeclarations(defaultDeclaration: DefaultDeclaration) {
    return this.http.post(
      `${this.API_URL}defaultdeclarations`,
      defaultDeclaration
    );
  }
}
