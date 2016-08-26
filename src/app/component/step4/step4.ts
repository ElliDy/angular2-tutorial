import {Component} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step4',
  styleUrls: ['./step4.css'],
  templateUrl: './step4.html',
  providers: [TodoService]
})
export class Step4 {
	todos:String[];
	checkbox;

	constructor(private todoService:TodoService){
		this.checkbox = {};
		this.todos = this.todoService.getTodos();
	}

	addTodo(value){
		this.todoService.addTodo(value);
	}

	deleteTodo(index){
		this.todoService.deleteTodo(index);
	}
}
