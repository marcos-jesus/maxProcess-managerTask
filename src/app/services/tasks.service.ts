import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITasks } from '../interfaces/itasks';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  constructor(private _http : HttpClient) { }

  getTasks(): Observable<ITasks[]> {
    return this._http.get<ITasks[]>(`${environment.api}/task`)
  }
}
