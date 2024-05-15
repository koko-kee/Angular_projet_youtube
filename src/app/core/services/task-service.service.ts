import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from '../../environnements/environnement';
import { TaskResponse } from '../models/task-response.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<TaskResponse> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<TaskResponse>(`${environnement.ApiUrl}/tasks`, {
      headers,
    });
  }

  createTask(request: any): Observable<TaskResponse> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<TaskResponse>(
      `${environnement.ApiUrl}/tasks`,
      request,
      {
        headers,
      }
    );
  }

  updateTask(request: any, id: number): Observable<TaskResponse> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<TaskResponse>(
      `${environnement.ApiUrl}/tasks/${id}`,
      request,
      {
        headers,
      }
    );
  }

  removeTask(id: number): Observable<TaskResponse> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<TaskResponse>(
      `${environnement.ApiUrl}/tasks/${id}`,
      {
        headers,
      }
    );
  }

  changeStatut(request: any, id: number): Observable<TaskResponse> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<TaskResponse>(
      `${environnement.ApiUrl}/tasks/change/${id}`,
      request,
      {
        headers,
      }
    );
  }

  getStatistique(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${environnement.ApiUrl}/count`, {
      headers,
    });
  }
}
