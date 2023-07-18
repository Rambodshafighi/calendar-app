// calendar-app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarAppComponent } from './calendar-app.component';

@NgModule({
  declarations: [
    CalendarAppComponent
    // اگر کامپوننت‌های دیگری وجود دارند، آنها را هم اینجا ثبت کنید
  ],
  imports: [CommonModule],
  // اگر از این کامپوننت‌ها در این ماژول استفاده نمی‌کنید، باید از اینجا حذف شوند
  exports: [
    CalendarAppComponent
    // اگر از این کامپوننت‌ها در این ماژول استفاده می‌کنید، آنها را اینجا نیز ثبت کنید
  ]
})
export class CalendarAppModule { }
