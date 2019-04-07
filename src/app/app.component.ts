import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModuleHiderService } from './services/module-hider/module-hider.service';
import { Subscription } from 'rxjs';
import { TimetableApiService } from './services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { _ } from 'underscore';
import { AuthService } from './services/auth/auth.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { UserService } from './services/user/user.service';

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
  private hidingModule: boolean = false;
  
  constructor(
    private _router: Router,
    private _moduleHiderService: ModuleHiderService,
    private _timetableAPI: TimetableApiService,
    private _toastr: ToastrService,
    private _authService: AuthService,
    private _userService: UserService
  ) {
    this.moduleSub = this._moduleHiderService.GetModule().subscribe(mod => { 
      if (mod.hide) this.hiddenModules.push(mod);
      if (!mod.hide) this.hiddenModules.splice(this.hiddenModules.indexOf(mod), 1);
    });

    this._router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        if (evt.url != "/timetable") this.hiddenModules = []
      }
    });
   }

  ngOnDestroy() {
    this.moduleSub.unsubscribe();
  }

  public ShowHideButton = (): boolean => this._router.url == "/timetable" && !_.isEmpty(this.hiddenModules);

  public HideModules = (): void => {
    if (!this._authService.IsLoggedIn || this.hidingModule) return;  // Prevent double clicking
    this.hidingModule = true;

    this._timetableAPI.HideModules(this._userService.Username(), this._userService.TimetableURL(), this.StripModules()).subscribe(() => {     
      this.hiddenModules = [];
      this._moduleHiderService.NotifyListeners();

      this.hidingModule = false;
    });
  }

  private StripModules = (): Object[] => 
    _.map(this.hiddenModules, (m) => { 
      return {
        name: m.module.module.name,
        day: m.day,
        times: {
          start : m.module.times.start.format('HH:mm:ss'),
          end : m.module.times.end.format('HH:mm:ss')
        }
      } 
    });

}
