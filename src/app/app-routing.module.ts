import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginIfNoAuthGuard} from './login-if-no-auth.guard';
import {LandingComponent} from './landing/landing.component';
import {MoodDetailsComponent} from "./mood-details/mood-details.component";
import {MoodListComponent} from "./mood-list/mood-list.component";

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginIfNoAuthGuard],
    children: [
      {
        path: 'moods',
        component: MoodListComponent,
        canActivate: [LoginIfNoAuthGuard],
      },
      {
        path: 'moods/:moodId',
        component: MoodDetailsComponent,
        canActivate: [LoginIfNoAuthGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
