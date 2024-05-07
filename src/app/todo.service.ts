import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [] as Todo[];

  constructor() { }

  addTodo() {
    let todo = (document.getElementById('inputData') as HTMLInputElement).value,
        id = Math.round(Math.random() * 100),
        obj = {id: id, todoName: todo};
    
    this.todos.push(obj);
  }

  deleteTodo(id: number) {
    let newTodos = this.todos.filter(obj => obj.id !== id);
    this.todos = newTodos;
  }

  editTodo() {

  }

}
