import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Declaration } from '../Interfaces/Declaration.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUserDeclarations() {
    return this.http.get<Declaration[]>(`${this.API_URL}events`);
  }
}
