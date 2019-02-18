import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';

// Components
import { AppComponent } from './app.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { SelectCourseFormComponent } from './components/select-course-form/select-course-form.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TimetableDayComponent } from './components/timetable-day/timetable-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageHeadingComponent,
    SelectCourseFormComponent,
    MyTimetableComponent,
    TimetableDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
