import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { TimetableService } from '../../services/timetable/timetable.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Day from '../../models/day.model';
import { _ } from 'underscore';
import TimetableModule from '../../models/timetable-module.model';
import Break from '../../models/break.model';
import Timetable from '../../models/timetable.model';
import { AuthService } from '../../services/auth/auth.service';
import { ModuleHiderService } from '../../services/module-hider/module-hider.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less'],
  host: { 'class': 'page-block' }
})

export class MyTimetableComponent implements OnInit, OnDestroy {

  public heading: string = "My Timetable";
  public timetable: Timetable;
  public error: string;
  private modHiddenSub: Subscription;

  constructor(
    private _title: Title,
    private _timetableAPI: TimetableApiService,
    private _timetableService: TimetableService,
    private _moduleHiderService: ModuleHiderService,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userService: UserService,
    private _spinner: NgxSpinnerService
  ) { 
    this._title.setTitle('My Timetable | ITSligo Timetable');

    this.modHiddenSub = this._moduleHiderService.ModulesHaveBeenHidden().subscribe(hidden => {
      if (hidden) this.UpdateTimetable();
    })
   }

  ngOnInit() { 
    this.ShowSpinner();
    this.GetTimetable();
  }

  ngOnDestroy = () => this.modHiddenSub.unsubscribe();

  private GetTimetable = (): void | object => {
    if (!this._userService.TimetableURL()) {
      this._router.navigate(['/']);
    } else {
      if (this._authService.IsLoggedIn())
        this._timetableAPI.MyTimetable(this._userService.Username(), this._userService.TimetableURL()).subscribe((timetable: Timetable) => {     
          console.log(timetable)
          this.HideSpinner();
          this.timetable = timetable; 
        }, (err) => {
          this.HideSpinner();
          this._toastr.error(err.error.errorText || "Unknown Error");
          this.error = err.error.errorText;
        });
      else 
        this._timetableAPI.GetTimetable(this._userService.TimetableURL()).subscribe((timetable: Timetable) => {     
          console.log(timetable)
          this.HideSpinner();
          this.timetable = timetable; 
        }, (err) => {
          this.HideSpinner();
          this._toastr.error(err.error.errorText || "Unknown Error");
          this.error = "Failed to retrieve your timetable. Try reloading the page.";
        });
    }
  }

  private ShowSpinner = () => this._spinner.show();

  private HideSpinner = () => this._spinner.hide();

  public RestoreHiddenModules = (): void => {
    this._timetableAPI.RestoreModules(this._userService.Username(), this._userService.TimetableURL()).subscribe(() => {
      this.UpdateTimetable();
    });
  }

  private UpdateTimetable = (): void => this.GetTimetable() && this._moduleHiderService.ResetNotification();

  public FinishedForTheDay = (): boolean => !this._timetableService.HaveModulesLeft(this.timetable);

  public HaveModulesToday = (): boolean => this._timetableService.HaveModulesToday(this.timetable);

  public Today = (): Day => this._timetableService.Today(this.timetable);

  public HaveModuleNow = (): boolean => !_.isEmpty(this.CurrentModule());

  public HaveBreakNow = (): boolean => !!this.CurrentBreak();

  public CurrentModule = (): TimetableModule[] => this._timetableService.CurrentModule(this.timetable);

  public CurrentBreak = (): Break => this._timetableService.CurrentBreak(this.timetable);

  public HideModule = (mod: Object): void => this._moduleHiderService.HideModule(mod);

  public UnhideModule = (mod: TimetableModule): void => this._moduleHiderService.UnhideModule(mod);

}