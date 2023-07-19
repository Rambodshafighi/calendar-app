import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar-app',
  templateUrl: './calendar-app.component.html',
  styleUrls: ['./calendar-app.component.css']
})
export class CalendarAppComponent {
  appointments: { title: string; date: Date; description: string; }[] = [];

  onAppointmentSubmitted(appointment: { title: string; date: Date; description: string; }) {
    this.appointments.push(appointment);
  }

  onDeleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  onMoveAppointment(event: CdkDragDrop<{ title: string; date: Date; description: string; }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
    } else {
      // Handle move between different lists if needed
    }
  }
}
