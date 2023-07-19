import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-app',
  templateUrl: './calendar-app.component.html',
  styleUrls: ['./calendar-app.component.css']
})
export class CalendarAppComponent {
  appointments: any[] = [];

  onAppointmentSubmitted(appointment: any) {
    this.appointments.push(appointment);
  }
}
