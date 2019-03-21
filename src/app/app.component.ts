import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModuleHiderService } from './services/module-hider/module-hider.service';
import { Subscription } from 'rxjs';
import { TimetableApiService } from './services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { _ } from 'underscore';
import { AuthService } from './services/auth/auth.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('FadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate('400ms ease-in-out') ]),
      transition(':leave', animate('200ms ease-in-out', style({ opacity: 0 })))
    ])
  ]
})

export class AppComponent implements OnDestroy {

  private moduleSub: Subscription;
  private hiddenModules: Object[] = [];
  
  constructor(
    private _router: Router,
    private _moduleHiderService: ModuleHiderService,
    private _timetableAPI: TimetableApiService,
    private _toastr: ToastrService,
    private _authService: AuthService,
  ) {
    this.moduleSub = this._moduleHiderService.GetModule().subscribe(cl => { 
      if (cl.hide) this.hiddenModules.push(cl);
      if (!cl.hide) this.hiddenModules.splice(this.hiddenModules.indexOf(cl), 1);
    });

    this._router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        if (evt.url != "/timetable") this.hiddenModules = []
      }
    });
   }

  ngOnDestroy = () => this.moduleSub.unsubscribe();

  public ShowHideButton = (): boolean => this._router.url == "/timetable" && !_.isEmpty(this.hiddenModules);

  public HideModules = (): void => {
    if (!this._authService.IsLoggedIn) return

    this._timetableAPI.HideModules(localStorage.getItem('studentID'), localStorage.getItem('timetableURL'), this.StripModules()).subscribe(() => {     
      this.hiddenModules = [];
      this._moduleHiderService.NotifyListeners();
    }, (err) => {
      this._toastr.error(err.error.errorText);
    });
  }

  private StripModules = (): Object[] => 
    _.map(this.hiddenModules, (m) => { 
      return {
        name: m.class.module.name,
        day: m.day,
        times: {
          start : m.class.times.start.format('HH:mm:ss'),
          end : m.class.times.end.format('HH:mm:ss')
        }
      } 
    });

}
