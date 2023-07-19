import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  @Output() appointmentSubmitted = new EventEmitter<any>();

  onFormSubmit() {
    const appointment = {
      title: this.formData.title,
      date: new Date(this.formData.date),
      description: this.formData.description
    };

    this.appointmentSubmitted.emit(appointment);
    this.formData = {}; // Reset form data after submission
  }
}
