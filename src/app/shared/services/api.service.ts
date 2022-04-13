import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { from, Observable } from 'rxjs';
import { Declaration } from '../Interfaces/Declaration.model';
import { DefaultDeclaration } from '../Interfaces/DefaultDeclaration.model';
import { Summary } from '../Interfaces/Summary.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUserDeclarations() {
    return this.http.get<Declaration[]>(`${this.API_URL}declarations`);
  }

  getSummary() {
    return this.http.get<Summary>(`${this.API_URL}summary`);
  }

  getDefaultDeclarations() {
    return this.http.get<DefaultDeclaration[][]>(
      `${this.API_URL}defaultdeclarations`
    );
  }

  postDefultDeclarations(defaultDeclarations: DefaultDeclaration[]) {
    return this.http.post(
      `${this.API_URL}defaultdeclarations`,
      defaultDeclarations
    );
  }

  addUserDeclaration(declaration: Partial<Declaration>) {
    return this.http.post<Declaration>(
      `${this.API_URL}declarations`,
      declaration
    );
  }

  getDaysOff() {
    return this.http.get<
      {
        id: number;
        day: string;
      }[]
    >(`${this.API_URL}daysoff`);
  }

  addDayOff(dayOff: { day: string }) {
    return this.http.post<{ day: string }>(`${this.API_URL}daysoff`, dayOff);
  }

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

    withCredentials: true,
    observe: 'response' as 'response',
  };

  getConfigResponse2(user: { username: string; password: string }) {
    return this.http.post<{ username: string; password: string }>(
      `https://adamskas-declarations.herokuapp.com/login`,
      user,
      this.httpOptions
    );
  }
}
