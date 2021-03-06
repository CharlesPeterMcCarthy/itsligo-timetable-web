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
import { FooterComponent } from './components/footer/footer.component';

// Timetable Components
import { TimetableDayComponent } from './components/timetable/timetable-day/timetable-day.component';
import { TimetableModuleComponent } from './components/timetable/timetable-module/timetable-module.component';
import { BreakComponent } from './components/timetable/break/break.component';
import { CurrentModuleComponent } from './components/timetable/current-module/current-module.component';
import { CurrentBreakComponent } from './components/timetable/current-break/current-break.component';
import { ModuleInfoComponent } from './components/timetable/module-info/module-info.component';
import { DayInfoComponent } from './components/timetable/day-info/day-info.component';

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

// Admin
import { UsersComponent } from './pages/admin/users/users.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserInfoComponent } from './components/admin/user-info/user-info.component';

// Pipes
import { SortListPipe } from './pipes/sort-list.pipe';
import { DatetimePipe } from './pipes/datetime.pipe';

// Extras
import { ToastrModule } from 'ngx-toastr';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageHeadingComponent,
    SelectCourseFormComponent,
    MyTimetableComponent,
    TimetableDayComponent,
    TimetableModuleComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    NavLinkComponent,
    ButtonComponent,
    InputFieldComponent,
    DropdownComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BreakComponent,
    CurrentModuleComponent,
    CurrentBreakComponent,
    SortListPipe,
    DatetimePipe,
    FooterComponent,
    UsersComponent,
    UserListComponent,
    UserInfoComponent,
    SpinnerComponent,
    ModuleInfoComponent,
    DayInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbTooltipModule,
    FontAwesomeModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
