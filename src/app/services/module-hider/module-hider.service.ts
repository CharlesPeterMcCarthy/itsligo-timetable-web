import { Injectable } from '@angular/core';
import Class from '../../models/class.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class ModuleHiderService {

  private subject = new BehaviorSubject<any>({});
  private modulesHaveBeenHidden = new BehaviorSubject<boolean>(false);

  constructor() { }

  GetModule = (): Observable<any> => this.subject.asObservable();

  ModulesHaveBeenHidden = (): Observable<boolean> => this.modulesHaveBeenHidden.asObservable();

  NotifyListeners = (): void => this.modulesHaveBeenHidden.next(true);

  ResetNotification = (): void => this.modulesHaveBeenHidden.next(false);  

  HideModule = (cl: Object): void => this.subject.next(_.extend(cl, { hide: true }));

  UnhideModule = (cl: Class): void => this.subject.next(_.extend(cl, { hide: false }));

}
