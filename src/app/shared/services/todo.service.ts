import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as globalVariables from "../config/global-variables";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
    ) { }

    toDoList: any = [];
    showDetails = false;

    toDoForm = this.formBuilder.group({
        id: 0,
        todo_priority: ['', [Validators.required]],
        todo_description: ['', Validators.required],
        todo_completed: [null, Validators.required],
    })

    initializeToDoForm() {
        this.toDoForm.setValue({
            id: 0,
            todo_priority: '',
            todo_description: '',
            todo_completed: null,
        })
    }

    refreshToDoList() {
        this.getAllListAPI().subscribe((res) => {
            if (res != null) {
                this.toDoList = res;
            }
        }, err => {
            console.log(err);
        })
    }


    updateAsComplete(id) {
        return this.http.patch(globalVariables.baseURL + 'update/' + id, {
            "todo_completed": true
        })
    }

    postToDoAPI() {
        return this.http.post(globalVariables.baseURL + 'todos/add', this.toDoForm.value)
    }


    putToDoAPI() {
        return this.http.patch(globalVariables.baseURL + 'todos/update/' + this.toDoForm.value.id, this.toDoForm.value)
    }


    getAllListAPI() {
        return this.http.get(globalVariables.baseURL + 'todos')
    }

    getToDoAPI(id: number) {
        return this.http.get(globalVariables.baseURL + 'todos/' + id)
    }

    deleteAPI(id) {
        return this.http.delete(globalVariables.baseURL + 'todos/delete/' + id)
    }
}