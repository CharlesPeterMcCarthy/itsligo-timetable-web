import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';

// Components
import { AppComponent } from './app.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { SelectCourseFormComponent } from './components/select-course-form/select-course-form.component';
import { TimetableDayComponent } from './components/timetable-day/timetable-day.component';
import { TimetableClassComponent } from './components/timetable-class/timetable-class.component';
import { NavComponent } from './components/nav/nav.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

// Extras
import { ToastrModule } from 'ngx-toastr';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageHeadingComponent,
    SelectCourseFormComponent,
    MyTimetableComponent,
    TimetableDayComponent,
    TimetableClassComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    ConfirmEmailComponent
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
