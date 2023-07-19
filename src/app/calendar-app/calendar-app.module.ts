import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarAppComponent } from './calendar-app.component';
import { CalendarViewModule } from '../calendar-view/calendar-view.module';
import { FormComponent } from '../form/form.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms'; // اضافه کردن FormsModule

@NgModule({
  declarations: [CalendarAppComponent, FormComponent, AppointmentListComponent],
  imports: [CommonModule, CalendarViewModule, FormsModule], // اضافه کردن FormsModule
  exports: [CalendarAppComponent]
})
export class CalendarAppModule { }
