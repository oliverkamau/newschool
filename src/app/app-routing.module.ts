import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth/auth.guard";
import {UsersComponent} from "./users/users.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'login' , component: LoginComponent},

  { path: 'home' , component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'users', component: UsersComponent
      }
    ]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

