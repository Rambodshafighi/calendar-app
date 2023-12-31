import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent {
  @Input() appointments: any[] = [];
  @Output() appointmentMoved = new EventEmitter<{ fromIndex: number, toIndex: number }>();
}
