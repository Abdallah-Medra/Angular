import { Component, OnInit } from '@angular/core';
import { ITodo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {
todo?:ITodo[];
  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
    this.FetchData();}
  FetchData(){
    this.TodoService.getAll().subscribe(
      (res)=>{

        this.todo=res.Data;
      }
    )
  }

  Delete(ID:number){
    this.TodoService.deleteOne(ID).subscribe(
      (value)=>{
        console.log(ID)
        console.log(value)
        this.FetchData()
  })
}
edite(Titel:any){
  this.TodoService.edit(Titel).subscribe(
    (value)=>{
      console.log(value)
      this.FetchData()
    }
  )
}
}
