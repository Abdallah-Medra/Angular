import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITodo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  addtask?:FormGroup;
  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
  }
  gettask(){
    this.TodoService.getAll().subscribe(data=>{
      // this.task=data
    })
  }
}
