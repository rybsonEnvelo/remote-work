import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { SummaryComponent } from './summary/summary.component';
import { FilterComponent } from './summary/filter/filter.component';
import { SettingsComponent } from './settings/settings.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'freedays', component: MainComponent },
  { path: 'declarations', component: MainComponent },
  { path: 'settings', component: SettingsComponent },
];

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SummaryComponent,
    FilterComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
