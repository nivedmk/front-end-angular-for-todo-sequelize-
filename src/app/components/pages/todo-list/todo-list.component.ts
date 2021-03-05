import { Component, OnInit } from '@angular/core';
import { ToDoService } from "../../../shared/services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    public toDoService: ToDoService
  ) { }

  ngOnInit(): void {
    this.toDoService.refreshToDoList()
  }

  completed: boolean;
  theCheckbox = false;
  statusComplete(e, id: number) {
    this.completed = e.target.checked;

    if (e.target.checked) {
      this.toDoService.updateAsComplete(id).subscribe((res: any) => {
        if (res) {
          console.log(res);
        }
      }, err => {
        console.log(err);

      })
    }

  }

  changeDetail() {
    this.toDoService.showDetails = true;
  }

  deleteToDo(id: number) {
    this.toDoService.deleteAPI(id).subscribe((res: any) => {
      if (res.message === 'SUCCESS') {
        console.log('success');
        this.toDoService.refreshToDoList()
      }
    }, err => {
      console.log(err);
    })
  }

  getToDo(id: number) {
    this.toDoService.getToDoAPI(id).subscribe((res: any) => {
      if (res.message === 'SUCCESS') {
        console.log('fetch success');
        this.toDoService.toDoForm.patchValue(res.toDo)
        this.toDoService.showDetails = true;
      }
    }, err => {
      console.log(err);

    })
  }

}
