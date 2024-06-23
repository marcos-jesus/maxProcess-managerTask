import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ITasks } from '../interfaces/itasks'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient) {}

  getTasks(): Observable<ITasks[]> {
    return this._http.get<ITasks[]>(`${environment.api}/task`)
  }

  getTask(id: string): Observable<ITasks> {
    return this._http.get<ITasks>(`${environment.api}/task/${id}`)
  }

  PostTask(task: ITasks): Observable<ITasks> {
    return this._http.post<ITasks>(`${environment.api}/task`, task)
  }

  updateTask(data: ITasks): Observable<ITasks> {
    return this._http.put<ITasks>(`${environment.api}/task/${data.id}`, data)
  }

  deleteTask(id: string): Observable<ITasks> {
    return this._http.delete<ITasks>(`${environment.api}/task/${id}`)
  }

  getTasksPaginated(
    order: string,
    page: number,
    limit: number,
  ): Observable<ITasks[]> {
    return this._http.get<ITasks[]>(`${environment.api}/task`, {
      params: { order, page, limit },
    })
  }

  getTasksFiltered(
    page: number,
    limit: number,
    filter: string[],
  ): Observable<ITasks[]> {
    return this._http.get<ITasks[]>(`${environment.api}/task`, {
      params: { page, limit, filter },
    })
  }
}
