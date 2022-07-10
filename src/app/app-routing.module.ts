import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginIfNoAuthGuard } from './login-if-no-auth.guard';

const routes: Routes = [
  { path: 'landing', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginIfNoAuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
