import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  summaryInformations: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getSummary()
      .subscribe((item) => (this.summaryInformations = item));
  }
}
