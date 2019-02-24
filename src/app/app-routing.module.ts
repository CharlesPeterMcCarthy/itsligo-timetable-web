import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { TimetableGuard } from './guards/timetable.guard';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timetable', component: MyTimetableComponent, canActivate: [TimetableGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'confirm/:code', component: ConfirmEmailComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
