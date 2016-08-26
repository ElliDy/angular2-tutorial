import {Component} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step3',
  styleUrls: ['./step3.css'],
  templateUrl: './step3.html',
  providers: [TodoService]
})
export class Step3 {
	todos:String[];

	constructor(private todoService:TodoService){
		this.todos = this.todoService.getTodos();
	}

	addTodo(value){
		this.todoService.addTodo(value);
	}

	deleteTodo(index){
		this.todoService.deleteTodo(index);
	}
}
