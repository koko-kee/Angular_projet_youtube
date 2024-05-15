import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';

import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './components/management-tasks/tasks/tasks.component';
import { TaskFormComponent } from './components/management-tasks/task-form/task-form.component';
import { CounterTaskComponent } from './components/management-tasks/counter-task/counter-task.component';
import { TaksListComponent } from './components/management-tasks/taks-list/taks-list.component';
import { BtnStylePipe } from './btn-style.pipe';
import { StatistiqueStylePipe } from './statistique-style.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    TaskFormComponent,
    CounterTaskComponent,
    TaksListComponent,
    BtnStylePipe,
    StatistiqueStylePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
