// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarAppComponent } from './calendar-app/calendar-app.component';
import { FormComponent } from './form/form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarAppComponent },
  { path: 'form', component: FormComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'calendar', component: CalendarViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
