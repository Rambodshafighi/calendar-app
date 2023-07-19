import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarAppComponent } from './calendar-app/calendar-app.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
