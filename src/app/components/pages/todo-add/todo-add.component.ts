import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(
    public toDoService: ToDoService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit() {

    if (this.toDoService.toDoForm.value.id === 0) {
      this.postForm()
    } else {
      this.putForm()
    }

  }
  postForm() {
    this.toDoService.postToDoAPI().subscribe((res: any) => {
      if (res.message === 'SUCCESS') {
        console.log('success');
        this.showList();
      }
    }, err => {
      console.log(err);
    })
  }

  putForm() {
    this.toDoService.putToDoAPI().subscribe((res: any) => {
      if (res.message === 'SUCCESS') {
        console.log('success');
        this.showList();
      }
    }, err => {
      console.log(err);
    })
  }

  showList() {
    this.toDoService.initializeToDoForm();
    this.toDoService.showDetails = false;
  }

}
