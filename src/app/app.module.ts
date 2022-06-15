import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

import { ToolbarComponent } from './main-body/toolbar/toolbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { CreditCardComponent } from './main-body/credit-card/credit-card.component';
import { StatisticsComponent } from './main-body/statistics/statistics.component';
import { EarningInMonthComponent } from './main-body/earning-in-month/earning-in-month.component';
import { SalesComponent } from './main-body/sales/sales.component';
import { CalendarComponent } from './main-body/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    NotFoundComponent,
    MainBodyComponent,
    SiteLayoutComponent,
    CreditCardComponent,
    StatisticsComponent,
    EarningInMonthComponent,
    SalesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
