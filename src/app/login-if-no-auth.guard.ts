import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginIfNoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): UrlTree | boolean {
    if (!this.authService.hasValidToken) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }
  }
}
