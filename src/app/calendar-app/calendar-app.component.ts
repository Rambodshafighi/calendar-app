import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-app',
  templateUrl: './calendar-app.component.html',
  styleUrls: ['./calendar-app.component.css']
})
export class CalendarAppComponent {
  appointments: { title: string, date: Date, description: string }[] = [];

  onAppointmentCreated(appointment: { title: string, date: Date, description: string }) {
    this.appointments.push(appointment);
  }

  onAppointmentUpdated(updatedAppointment: { title: string, date: Date, description: string }) {
    const index = this.appointments.findIndex(appt => appt.title === updatedAppointment.title);
    if (index !== -1) {
      this.appointments[index] = updatedAppointment;
    }
  }
}
