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
import { NavComponent } from './components/nav/nav.component';
import { NavLinkComponent } from './components/nav/nav-link/nav-link.component';

// Timetable Components
import { TimetableDayComponent } from './components/timetable/timetable-day/timetable-day.component';
import { TimetableClassComponent } from './components/timetable/timetable-class/timetable-class.component';
import { BreakComponent } from './components/timetable/break/break.component';
import { CurrentClassComponent } from './components/timetable/current-class/current-class.component';
import { CurrentBreakComponent } from './components/timetable/current-break/current-break.component';

// Input / Field Components
import { ButtonComponent } from './components/basic-components/button/button.component';
import { InputFieldComponent } from './components/basic-components/input-field/input-field.component';
import { DropdownComponent } from './components/basic-components/dropdown/dropdown.component';

// Form Components
import { SelectCourseFormComponent } from './components/forms/select-course-form/select-course-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';

// Pipes
import { SortListPipe } from './pipes/sort-list.pipe';

// Extras
import { ToastrModule } from 'ngx-toastr';

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
    ConfirmEmailComponent,
    SortListPipe,
    NavLinkComponent,
    ButtonComponent,
    InputFieldComponent,
    DropdownComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BreakComponent,
    CurrentClassComponent,
    CurrentBreakComponent
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
