// appointment-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  @Input() appointments: { title: string, date: Date, description: string }[] = [];
  @Output() appointmentDeleted = new EventEmitter<number>();

  onDeleteAppointment(index: number) {
    this.appointmentDeleted.emit(index);
  }
}
