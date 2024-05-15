import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { authGuard } from './auth.guard';
import { loginGuarGuard } from './login-guar.guard';
import { TasksComponent } from './components/management-tasks/tasks/tasks.component';

const routes: Routes = [
  {
    canActivate: [loginGuarGuard],
    path: 'login',
    component: LoginComponent,
  },
  {
    canActivate: [loginGuarGuard],
    path: 'register',
    component: RegisterComponent,
  },
  {
    canActivate: [authGuard],
    path: 'tasks',
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
