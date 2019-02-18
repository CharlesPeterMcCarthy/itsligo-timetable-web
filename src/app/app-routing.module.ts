import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { MyTimetableComponent } from './pages/my-timetable/my-timetable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timetable', component: MyTimetableComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
