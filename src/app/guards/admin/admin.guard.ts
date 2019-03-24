import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _adminService: AdminService,
    private _toastr: ToastrService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise(res => this._adminService.ConfirmAdmin().subscribe(data => {
        if (data['adminConfirmed']) res(true);
        else this._router.navigate(['/']); res(false);
      }, err => {
        this._toastr.error(err.error.errorText);
        this._router.navigate(['/']); res(false);
      }))
  }

}
