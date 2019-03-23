import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedInGuard implements CanActivate {
  
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this._authService.IsLoggedIn()) {
        this._router.navigate(['/']);
        return false;
      }
      return true;
  }

}
