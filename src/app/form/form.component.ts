import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() appointmentSubmitted = new EventEmitter<{ title: string, date: Date, description: string }>();

  title: string = '';
  date: Date | null = null;
  description: string = '';

  addAppointment() {
    if (this.title && this.date && this.description) {
      const newAppointment = { title: this.title, date: this.date, description: this.description };
      this.appointmentSubmitted.emit(newAppointment);
      this.title = '';
      this.date = null;
      this.description = '';
    }
  }
}
