import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): Promise<unknown> | void {
    const storageToken = localStorage.getItem('jwt');
    if (storageToken && storageToken.length) {
      return this.router.navigateByUrl('/home');
    }
    this.activatedRoute.queryParams.subscribe((params) => {
      const queryParams = params['token'];
      if (queryParams && queryParams.length) {
        localStorage.setItem('jwt', queryParams);
        return this.router.navigateByUrl('/home');
      }
      return this.router.navigateByUrl('/login');
    });
  }
}
