import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo, ITodoAdd } from '../model/todo';
import { APIResponse } from '../ViewShow/api';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getAll():Observable<APIResponse<ITodo[]>>{
    return this.http.get<APIResponse<ITodo[]>>("https://api.mohamed-sadek.com/Task/Get")
  }
  create(Title:ITodoAdd): Observable<APIResponse<ITodo[]>>{
    return this.http.post<APIResponse<ITodo[]>>("https://api.mohamed-sadek.com/Task/POST",Title)
  }
  edit(Title:ITodo):Observable<APIResponse<ITodo[]>> {
    return this.http.put<APIResponse<ITodo[]>>("https://api.mohamed-sadek.com/Task/PUT",Title)
  }
  deleteOne(ID:number): Observable<APIResponse<ITodo[]>> {
    return this.http.delete<APIResponse<ITodo[]>>("https://api.mohamed-sadek.com/Task/Delete?id="+ID)
  }
}
