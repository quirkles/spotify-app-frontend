import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void | Promise<boolean> {
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
