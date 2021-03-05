import { Component, OnInit } from '@angular/core';

import { ToDoService } from "../../../shared/services/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public todoService: ToDoService
  ) { }

  searchByProductName: string = ''

  ngOnInit(): void {
  }
}
