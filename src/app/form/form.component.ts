import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() appointmentSubmitted = new EventEmitter<{ title: string; date: Date; description: string; }>();
  formData = { title: '', date: new Date(), description: '' };

  onSubmit() {
    if (this.formData.title && this.formData.date && this.formData.description) {
      this.appointmentSubmitted.emit(this.formData);
      this.formData = { title: '', date: new Date(), description: '' };
    }
  }
}
