import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { TimetableService } from '../../services/timetable/timetable.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Day from '../../models/day.model';
import { _ } from 'underscore';
import Class from '../../models/class.model';
import Break from '../../models/break.model';
import Timetable from '../../models/timetable';
import { AuthService } from '../../services/auth/auth.service';
import { ModuleHiderService } from '../../services/module-hider/module-hider.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})

export class MyTimetableComponent implements OnInit, OnDestroy {

  public heading: string = "My Timetable";
  private timetable: Timetable;
  private modHiddenSub: Subscription;

  constructor(
    private _timetableAPI: TimetableApiService,
    private _timetableService: TimetableService,
    private _moduleHiderService: ModuleHiderService,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userService: UserService
  ) { 
    this.GetTimetable();

    this.modHiddenSub = this._moduleHiderService.ModulesHaveBeenHidden().subscribe(hidden => {
      if (hidden) this.UpdateTimetable();
    })
   }

  ngOnInit() { }

  ngOnDestroy = () => this.modHiddenSub.unsubscribe();

  private GetTimetable = (): void | object => {
    if (!this._userService.TimetableURL()) {
      this._router.navigate(['/']);
    } else {
      if (this._authService.IsLoggedIn())
        this._timetableAPI.MyTimetable(this._userService.StudentID(), this._userService.TimetableURL()).subscribe((timetable: Timetable) => {     
          console.log(timetable)
          this.timetable = timetable; 
        }, (err) => {
          this._toastr.error(err.error.errorText);
        });
      else
        this._timetableAPI.GetTimetable(this._userService.TimetableURL()).subscribe((timetable: Timetable) => {     
          console.log(timetable)
          this.timetable = timetable; 
        }, (err) => {
          this._toastr.error(err.error.errorText);
        });
    }
  }

  private UpdateTimetable = (): void => this.GetTimetable() && this._moduleHiderService.ResetNotification();

  public FinishedForTheDay = (): boolean => !this._timetableService.HaveClassesLeft(this.timetable);

  public HaveClassToday = (): boolean => this._timetableService.HaveClassToday(this.timetable);

  public Today = (): Day => this._timetableService.Today(this.timetable);

  public HasClassNow = (): boolean => !_.isEmpty(this.CurrentClass());

  public HasBreakNow = (): boolean => !!this.CurrentBreak();

  public CurrentClass = (): Class[] => this._timetableService.CurrentClass(this.timetable);

  public CurrentBreak = (): Break => this._timetableService.CurrentBreak(this.timetable);

  public HideModule = (cl: Object): void => this._moduleHiderService.HideModule(cl);

  public UnhideModule = (cl: Class): void => this._moduleHiderService.UnhideModule(cl);

}