import {Component} from '@angular/core';
import {TodoService} from './todoService';
@Component({
  selector: 'step2',
  styleUrls: ['./step2.css'],
  templateUrl: './step2.html',
  providers: [TodoService]
})
export class Step2 {
	todos:String[];

	constructor(private todoService:TodoService){
		this.todos = this.todoService.getTodos();
	}

	addTodo(value){
		this.todoService.addTodo(value);
	}
}
