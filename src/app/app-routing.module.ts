import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TimetableGuard } from './guards/timetable/timetable.guard';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { LoggedOutGuard } from './guards/logged-out/logged-out.guard';
import { LoggedInGuard } from './guards/logged-in/logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timetable', component: MyTimetableComponent, canActivate: [TimetableGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  { path: 'confirm/:code', component: ConfirmEmailComponent },
  { path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard, LoggedInGuard] },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
